# Creator Lab

## Project Overview

`Creator Lab` is a web application for video pre-production inspired by `ShotPrep` and partially by `StudioBinder`, focused on solo creators and compact production workflows.

The application should serve two purposes:

- a practical tool for planning video projects before shooting
- a portfolio-grade project that demonstrates strong full-stack and backend/system design skills

## Goal of V1

Build the first working version of the product that allows a user to:

- open a public welcome page
- sign up and sign in
- create and manage projects
- write a script for a project
- break the project into scenes
- create a shot list inside scenes
- attach reference assets
- generate export files in the background

## V1 Scope

Included in `v1`:

- welcome page / landing page
- authentication
- projects
- script editor
- scenes
- shots
- reference assets
- export engine
- background jobs
- basic observability
- Russian language support

Excluded from `v1`:

- collaboration
- comments
- version history
- AI features
- teams / shared workspaces
- real-time features
- video processing
- advanced analytics

## Welcome Page

The application should include a public landing page available without authentication.

Purpose:

- present the product idea
- explain the core value of the app
- provide clear entry points into the product

Required elements:

- headline and short product description
- short overview of key features
- call-to-action buttons:
  - `Sign In`
  - `Sign Up`
- optional section with screenshots or feature cards

Language requirement:

- the application should support Russian in public and primary authenticated UI
- the frontend text system should be prepared for localization from the start

## Core Functional Modules

### 1. Authentication

Features:

- user registration
- user login
- refresh token flow
- logout
- current user endpoint
- access restriction to owned resources only

### 2. Projects

Features:

- create project
- list user projects
- view project details
- update project metadata
- archive or delete project

Project fields:

- title
- description
- target platform
- aspect ratio
- status

### 3. Script Editor

Features:

- one script per project
- rich text editing
- autosave
- plain text representation
- word count
- last saved timestamp

### 4. Scenes

Features:

- create scene
- edit scene
- delete scene
- reorder scenes

Scene fields:

- title
- summary
- location
- time of day
- notes
- order index

### 5. Shots

Features:

- create shots inside a scene
- edit shot data
- delete shots
- reorder shots
- manage shot status

Shot fields:

- title
- description
- shot type
- camera angle
- camera movement
- duration
- location
- props notes
- audio notes
- lighting notes
- talent notes
- status
- order index

### 6. Reference Assets

Features:

- upload images and PDF files
- add external links
- bind assets to a project, scene, or shot
- list and remove assets

### 7. Export Engine

Features:

- create `project brief` export
- create `shot list` export
- run export generation in the background
- store export status
- download completed export files

### 8. System Features

Features:

- health endpoints
- structured logging
- DTO validation
- centralized error handling
- Swagger/OpenAPI

### 9. Localization

Features:

- Russian language support for the UI
- localization-ready text architecture
- localized public pages and primary authenticated screens

## Technical Stack

### Frontend

- `Next.js`
- `React`
- `TypeScript`
- `Tailwind CSS`
- `shadcn/ui`
- `TanStack Query`
- `TanStack Table`
- `dnd-kit`
- `Tiptap`
- `next-intl` or equivalent i18n solution

### Backend

- `NestJS`
- `TypeScript`
- `Prisma`
- `PostgreSQL`
- `Redis`
- `BullMQ`
- `JWT` auth
- `Pino`
- `Swagger`

### Infrastructure

- `pnpm` monorepo
- `Docker Compose`
- `MinIO` for local S3-compatible storage
- `Linux VDS` for production
- local development on `Windows`

## Technology Overview

### Frontend Technologies

`Next.js`

- used for the public landing page and the authenticated web application
- provides routing, application structure, and modern React app ergonomics

`React`

- used to build all interactive user interfaces
- powers the dashboard, editor, scene planner, shot list, and asset views

`TypeScript`

- used across both frontend and backend
- improves maintainability and reduces integration mistakes through static typing

`Tailwind CSS`

- used for styling the interface
- helps build a fast, consistent, product-style UI

`shadcn/ui`

- used as the base UI component system
- helps assemble polished interfaces without locking the project into a heavy component library

`Tiptap`

- used for script editing
- allows storing rich, structured content rather than plain textarea text

`TanStack Query`

- used for fetching and synchronizing backend data on the frontend
- helps with caching, loading states, and server-state management

`TanStack Table`

- used for the shot list and other structured tabular interfaces
- provides a solid foundation for sorting, filtering, and data display

`dnd-kit`

- used for drag-and-drop interactions
- supports scene and shot reordering in the planning workflow

`next-intl` or equivalent i18n solution

- used for localization support
- prepares the application for Russian-first UI with future support for additional languages

### Backend Technologies

`NestJS`

- the main backend framework
- used to build a modular REST API with a structure suitable for backend and system design growth

`Prisma`

- used as the ORM layer for the database
- simplifies schema management, migrations, and typed data access

`PostgreSQL`

- the main relational database
- stores users, projects, scripts, scenes, shots, assets, sessions, and export jobs

`Redis`

- used as the runtime store for background job processing
- supports queue state and asynchronous execution flow

`BullMQ`

- used for background jobs on top of Redis
- handles export processing and other heavy tasks outside the request-response cycle

`JWT`

- used for authentication and session flow
- supports access token and refresh token based authorization

`Pino`

- used for structured backend logging
- helps with diagnostics, debugging, and production observability

`Swagger`

- used to expose API documentation
- improves backend/frontend coordination and endpoint testing

### Infrastructure Technologies

`Docker Compose`

- used in local development on Windows
- runs infrastructure services such as PostgreSQL, Redis, and MinIO in containers

`MinIO`

- used as local S3-compatible object storage
- stores uploaded reference files and generated export files during development

`Linux VDS`

- the target production environment
- will host the backend, worker process, and supporting runtime configuration

## Environment Constraints

The project should be designed with two target environments in mind:

- local development and debugging on `Windows`
- production deployment on `Linux VDS`

Technical implications:

- infrastructure services should run in Docker containers locally
- no platform-specific logic should be required for normal development
- file and temp-path handling should use Node APIs
- production scripts should be Linux-friendly

## Proposed Repository Structure

```text
/apps
  /web
  /api

/packages
  /shared-types
  /eslint-config
  /tsconfig
```

## Backend Module Architecture

Suggested NestJS modules:

- `auth`
- `users`
- `projects`
- `scripts`
- `scenes`
- `shots`
- `reference-assets`
- `uploads`
- `exports`
- `jobs`
- `storage`
- `health`
- `common`

## Domain Model

Main entities:

- `User`
- `RefreshSession`
- `Project`
- `Script`
- `Scene`
- `Shot`
- `ReferenceAsset`
- `ExportJob`

Key relations:

- one user owns many projects
- one project has one script
- one project has many scenes
- one scene has many shots
- one project has many reference assets
- one project has many export jobs

## Non-Functional Requirements

- strong typing across frontend and backend
- consistent linting and formatting
- secure password hashing
- ownership checks for all project resources
- upload validation by file type and size
- rate limiting for auth endpoints
- basic backend e2e coverage for critical flows
- localization-friendly frontend architecture

## Step-by-Step Development Plan

### Phase 0. Specification and Design

Tasks:

- finalize `v1` scope
- finalize domain entities
- finalize backend module boundaries
- describe user flows
- decide export formats
- define production deployment approach

Deliverables:

- this technical specification
- architecture notes
- initial roadmap

### Phase 1. Project Setup

Tasks:

- create monorepo
- configure `pnpm` workspaces
- initialize `Next.js` app
- initialize `NestJS` app
- configure shared TypeScript, linting, formatting
- add Docker Compose for `Postgres`, `Redis`, and `MinIO`
- configure environment files

Outcome:

- local project starts on Windows with isolated infrastructure

### Phase 2. Backend Foundation

Tasks:

- configure Prisma
- create initial migrations
- add config module with env validation
- add logger
- add global validation pipe
- add global exception filter
- add health endpoints
- add Swagger

Outcome:

- backend foundation is production-oriented from the start

### Phase 3. Authentication

Tasks:

- implement `User` and `RefreshSession`
- registration
- login
- refresh flow
- logout
- current user endpoint
- route guards

Outcome:

- users can authenticate and access only their own data

### Phase 4. Projects

Tasks:

- implement `Project`
- project CRUD API
- ownership checks
- frontend project list page
- frontend project details page

Outcome:

- users can create and manage project containers

### Phase 5. Welcome Page

Tasks:

- create public landing page
- add product description
- add feature overview section
- add `Sign In` and `Sign Up` buttons
- connect auth entry points

Outcome:

- the app has a polished public-facing entry page

### Phase 6. Script Editor

Tasks:

- implement `Script`
- API for reading and updating scripts
- connect `Tiptap`
- implement autosave
- store `contentJson` and `plainText`
- show save state and word count

Outcome:

- the first core product workflow is usable

### Phase 7. Scenes

Tasks:

- implement `Scene`
- scene CRUD
- reorder scenes
- build scene list UI

Outcome:

- scripts can be transformed into structured pre-production units

### Phase 8. Shots

Tasks:

- implement `Shot`
- shot CRUD
- reorder shots inside scenes
- build shot list table UI
- add basic filtering and statuses

Outcome:

- the main planning workflow becomes available

### Phase 9. Reference Assets

Tasks:

- implement `ReferenceAsset`
- implement presigned upload flow
- implement complete-upload flow
- implement asset list UI
- implement external reference links
- bind assets to project, scene, or shot

Outcome:

- users can manage practical visual references inside projects

### Phase 10. Export Engine

Tasks:

- implement `ExportJob`
- add `Redis` and `BullMQ`
- create export queue worker
- generate export files
- store result in object storage
- provide export status and download endpoints

Outcome:

- the product can produce final deliverables asynchronously

### Phase 11. Hardening and First Deploy

Tasks:

- add rate limiting for auth
- improve logging
- add request IDs
- verify ownership rules in all endpoints
- add backend e2e tests
- prepare Linux deployment config
- deploy first version to VDS

Outcome:

- stable `v1` release candidate ready for real use

## Suggested Weekly Roadmap

### Week 1

- specification
- monorepo setup
- Docker Compose
- backend foundation
- auth

### Week 2

- welcome page
- projects
- script editor
- scenes

### Week 3

- shots
- reference assets
- upload flow

### Week 4

- export engine
- BullMQ worker
- hardening
- first deployment to Linux VDS

## Localization Requirement

The application should support Russian in `v1`.

Initial expectation:

- Russian should be available on the welcome page
- Russian should be available on authentication pages
- Russian should be available for primary product navigation and key UI actions

Architecture expectation:

- visible UI text should be extracted into localization resources where practical
- reusable components should avoid unnecessary hardcoded product text
- the frontend should be ready for future multi-language support

## User Stories and Technical Tasks

### Epic 1. Public Entry and Authentication

#### User Stories

- As a visitor, I want to open a public landing page so that I can understand what the product does.
- As a visitor, I want to see `Sign In` and `Sign Up` actions so that I can enter the product quickly.
- As a new user, I want to create an account so that I can start managing my video projects.
- As a returning user, I want to sign in securely so that I can access my projects.
- As an authenticated user, I want to stay signed in through refresh flow so that I do not need to log in again too often.
- As an authenticated user, I want to sign out so that my session ends safely.

#### Technical Tasks

Backend:

- create `User` and `RefreshSession` Prisma models
- implement password hashing
- implement register endpoint
- implement login endpoint
- implement refresh endpoint
- implement logout endpoint
- implement `GET /auth/me`
- add JWT access guard
- add refresh token storage and revocation logic
- add rate limiting for auth endpoints

Frontend:

- create public landing page
- add hero section and product summary
- add feature highlights
- create `Sign In` page
- create `Sign Up` page
- connect auth forms to backend
- implement auth state handling
- redirect authenticated users away from auth pages when appropriate

Infra:

- define auth-related env vars
- configure secure cookie/token strategy for local and production

### Epic 2. Project Management

#### User Stories

- As an authenticated user, I want to create a project so that I can plan a new video.
- As an authenticated user, I want to see a list of my projects so that I can continue existing work.
- As an authenticated user, I want to edit project details so that the project matches my production needs.
- As an authenticated user, I want to archive or delete a project so that I can keep my workspace clean.

#### Technical Tasks

Backend:

- create `Project` Prisma model
- implement project CRUD endpoints
- implement ownership checks for all project operations
- add project filtering for current user

Frontend:

- create projects dashboard page
- create new project flow
- create project details page
- create project metadata form
- add archive/delete actions with confirmation

Infra:

- prepare database migration for project schema

### Epic 3. Script Writing

#### User Stories

- As a user, I want each project to have a script so that I can write the concept and narrative in one place.
- As a user, I want the script to autosave so that I do not lose work.
- As a user, I want to see save state and word count so that I understand the current editing status.

#### Technical Tasks

Backend:

- create `Script` Prisma model
- implement read script endpoint by project
- implement update script endpoint
- implement autosave endpoint
- store `contentJson`, `plainText`, and `wordCount`
- enforce one script per project

Frontend:

- integrate `Tiptap`
- build script editor page
- implement autosave with debounce
- display save status
- display word count

Infra:

- validate body size limits for script payloads

### Epic 4. Scene Planning

#### User Stories

- As a user, I want to create scenes so that I can break the video into manageable parts.
- As a user, I want to edit scene details so that each scene is production-ready.
- As a user, I want to reorder scenes so that the structure matches my intended flow.
- As a user, I want to remove scenes so that I can clean up the project structure.

#### Technical Tasks

Backend:

- create `Scene` Prisma model
- implement scene CRUD endpoints
- implement scene reorder endpoint
- validate scene ownership through project ownership

Frontend:

- create scenes panel or page
- build create/edit scene form
- build reorder UI with `dnd-kit`
- add delete action with confirmation

Infra:

- prepare migration for scene schema and order indexes

### Epic 5. Shot List Planning

#### User Stories

- As a user, I want to create shots inside a scene so that I can plan coverage in detail.
- As a user, I want to store shot metadata so that I can prepare camera, lighting, and audio decisions.
- As a user, I want to reorder shots so that the shot list reflects my actual plan.
- As a user, I want to mark shot status so that I can track readiness.

#### Technical Tasks

Backend:

- create `Shot` Prisma model
- implement shot CRUD endpoints
- implement reorder endpoint for shots inside a scene
- implement status updates
- validate ownership and scene/project linkage

Frontend:

- create shot list table using `TanStack Table`
- build create/edit shot form
- implement reorder interaction
- add filtering by scene and status

Infra:

- prepare migration for shot schema and order indexes

### Epic 6. Reference Assets

#### User Stories

- As a user, I want to upload visual reference files so that I can keep inspiration and planning material inside the project.
- As a user, I want to add external links so that I can save non-uploaded references.
- As a user, I want to attach references to scenes or shots so that the references stay contextual.
- As a user, I want to remove outdated references so that the project stays clean.

#### Technical Tasks

Backend:

- create `ReferenceAsset` Prisma model
- implement list/create/delete asset endpoints
- implement external link asset creation
- implement presigned upload endpoint
- implement upload completion endpoint
- validate mime type and file size
- support optional binding to scene or shot

Frontend:

- create reference library UI
- create upload flow
- create external link form
- display file and link cards
- add binding controls for project/scene/shot context

Infra:

- configure `MinIO` locally
- define S3-compatible storage env vars
- test local upload flow on Windows

### Epic 7. Export Engine

#### User Stories

- As a user, I want to request a project export so that I can use the plan during production.
- As a user, I want export generation to happen in the background so that the app remains responsive.
- As a user, I want to see export status so that I know whether the file is ready.
- As a user, I want to download the completed export so that I can share or print it.

#### Technical Tasks

Backend:

- create `ExportJob` Prisma model
- implement create export request endpoint
- implement list export jobs endpoint
- implement get export job endpoint
- implement download endpoint
- create export generation service
- create BullMQ queue and worker
- update export status lifecycle
- upload export result to storage

Frontend:

- create export panel in project area
- allow selection of export type
- show export job list and statuses
- add download action for completed jobs

Infra:

- configure `Redis`
- configure BullMQ worker process
- define job retry policy
- define file retention strategy for exports

### Epic 8. System Quality and Operability

#### User Stories

- As a developer, I want structured logs so that I can debug issues faster.
- As a developer, I want health endpoints so that I can verify service readiness.
- As a developer, I want validation and consistent error responses so that the API is predictable.
- As a developer, I want API documentation so that frontend-backend integration is easier.
- As a developer, I want the app to run consistently on Windows locally and Linux in production so that development and deployment stay aligned.

#### Technical Tasks

Backend:

- configure global validation pipe
- configure global exception filter
- configure `Pino` logging
- add request IDs
- add `/health/live` and `/health/ready`
- generate Swagger docs
- add basic e2e tests for auth, projects, scripts, and exports

Frontend:

- create shared API client layer
- add consistent error handling for forms and data loading
- add loading and empty states for major pages

Infra:

- create `docker-compose` for local dependencies
- define production env contract
- prepare Linux deployment scripts
- prepare reverse proxy plan
- document run/build/deploy commands

### Epic 9. Localization

#### User Stories

- As a Russian-speaking user, I want to use the application in Russian so that the interface feels natural to me.
- As a product owner, I want the UI text system to be localization-ready so that future language support can be added without major rewrites.

#### Technical Tasks

Frontend:

- choose and integrate i18n solution for Next.js
- define translation file structure
- extract visible strings from the welcome page
- extract visible strings from auth pages
- localize common navigation and button labels
- make Russian the initial supported language

Backend:

- keep API responses language-neutral where practical
- leave room for localized validation and error messages later

Infra:

- define locale-related app configuration
- document localization strategy in frontend architecture notes
