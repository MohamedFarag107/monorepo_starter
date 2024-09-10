# How To Get Started

<!-- pre requirement -->

## Pre Requirement

### Install `win-node-env` globally if you are using Windows

```bash
npm install -g win-node-env
```

<!-- Server -->

## Server

### Create `.env.development` and `.env.production` in the root project folder with the following content:

```bash
# Application Configuration
PORT=
SERVER_URL=
CLIENT_URL=

# JWT Configuration
JWT_EXPIRE_IN=
JWT_EXPIRES_REMEMBER_ME=
JWT_SECRET=

# Moyasar Configuration
MOYASAR_SECRET_KEY=
MOYASAR_SECRET_TOKEN=
MOYASAR_URL=

# Database Configuration
DB_URI=
DB_NAME=

# Mailgun Configuration
MAILGUN_API_KEY=

# Admin Configuration
ADMIN_EMAIL=
ADMIN_NAME=
ADMIN_PASSWORD=

ROOT_EMAIL=
ROOT_PASSWORD=
ROOT_NAME=
```

### Install Dependencies

```bash
yarn
```

### Run Server

```bash
yarn dev
```

# Commit Message Naming Conventions

## General Structure:

```
<type>[<scope>]: <description>
```

- **type**: The purpose of the commit.
- **scope**: The part of the codebase affected (optional, but helps in categorizing).
- **description**: A brief description of the change (use imperative form).

## Types of Commits:

1. **feat**: A new feature for the user or a significant addition.

   ```
   feat[client]: add login page
   ```

2. **fix**: A bug fix.

   ```
   fix[server]: resolve user authentication issue
   ```

3. **refactor**: Code changes that neither fix a bug nor add a feature.

   ```
   refactor[client]: optimize login page rendering
   ```

4. **chore**: Routine tasks like dependency updates or file removal.

   ```
   chore[server]: update npm packages
   ```

5. **docs**: Documentation updates.

   ```
   docs[readme]: update installation guide
   ```

6. **style**: Formatting, missing semi-colons, white-space, etc.

   ```
   style[client]: fix code indentation in login page
   ```

7. **test**: Adding or updating tests.

   ```
   test[server]: add unit tests for login functionality
   ```

8. **build**: Changes that affect the build system or external dependencies.

   ```
   build[ci]: update GitHub Actions workflow
   ```

9. **ci**: Continuous integration related changes.

   ```
   ci[server]: add linting step to CI pipeline
   ```

10. **perf**: Performance improvements.

    ```
    perf[client]: improve page load speed on dashboard
    ```

11. **revert**: Revert a previous commit.

    ```
    revert[client]: revert commit 123abc for login page
    ```

12. **remove**: Deleting a file or component.
    ```
    chore[client]: remove unused env.example file
    ```

## Additional Guidelines:

- Use **imperative** form in the description (e.g., "add" instead of "added").
- Keep the message **concise** and **specific**.
- **Scope** is optional but recommended when multiple areas of the codebase are involved.
