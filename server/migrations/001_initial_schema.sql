CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE user_role AS ENUM ('student', 'family', 'instructor', 'admin');
CREATE TYPE lesson_status AS ENUM ('started', 'completed');
CREATE TYPE mission_status AS ENUM ('open', 'pending_confirmation', 'completed');

CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  display_name varchar(120) NOT NULL,
  email varchar(320),
  role user_role NOT NULL DEFAULT 'student',
  points integer NOT NULL DEFAULT 0 CHECK (points >= 0),
  streak integer NOT NULL DEFAULT 0 CHECK (streak >= 0),
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT users_email_unique UNIQUE (email)
);

-- Separa perfil de credenciais para permitir senha, Google ou outros provedores no futuro.
CREATE TABLE auth_identities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  provider varchar(40) NOT NULL,
  provider_subject varchar(320) NOT NULL,
  secret_hash text,
  verified_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (provider, provider_subject)
);

CREATE TABLE refresh_tokens (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash text NOT NULL UNIQUE,
  expires_at timestamptz NOT NULL,
  revoked_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX refresh_tokens_user_id_idx ON refresh_tokens(user_id);
CREATE INDEX refresh_tokens_expires_at_idx ON refresh_tokens(expires_at);

CREATE TABLE levels (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  number smallint NOT NULL UNIQUE CHECK (number > 0),
  name varchar(120) NOT NULL,
  description text NOT NULL,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  level_id uuid NOT NULL REFERENCES levels(id) ON DELETE CASCADE,
  number smallint NOT NULL CHECK (number > 0),
  title varchar(180) NOT NULL,
  subtitle text,
  content jsonb NOT NULL DEFAULT '{}'::jsonb,
  is_free boolean NOT NULL DEFAULT false,
  is_interactive boolean NOT NULL DEFAULT false,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (level_id, number)
);
CREATE INDEX lessons_level_id_idx ON lessons(level_id);
CREATE INDEX lessons_content_gin_idx ON lessons USING gin(content);

CREATE TABLE user_lesson_progress (
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  lesson_id uuid NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  status lesson_status NOT NULL DEFAULT 'started',
  score integer NOT NULL DEFAULT 0 CHECK (score >= 0),
  attempts integer NOT NULL DEFAULT 1 CHECK (attempts > 0),
  started_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, lesson_id)
);
CREATE INDEX user_lesson_progress_lesson_idx ON user_lesson_progress(lesson_id);

CREATE TABLE missions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title varchar(180) NOT NULL,
  description text NOT NULL,
  points integer NOT NULL DEFAULT 0 CHECK (points >= 0),
  starts_at timestamptz,
  ends_at timestamptz,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE user_missions (
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  mission_id uuid NOT NULL REFERENCES missions(id) ON DELETE CASCADE,
  status mission_status NOT NULL DEFAULT 'open',
  confirmed_by uuid REFERENCES users(id) ON DELETE SET NULL,
  completed_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, mission_id)
);

CREATE OR REPLACE FUNCTION set_updated_at() RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER levels_updated_at BEFORE UPDATE ON levels FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER lessons_updated_at BEFORE UPDATE ON lessons FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER progress_updated_at BEFORE UPDATE ON user_lesson_progress FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TRIGGER user_missions_updated_at BEFORE UPDATE ON user_missions FOR EACH ROW EXECUTE FUNCTION set_updated_at();
