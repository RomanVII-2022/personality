# Personality Test - Teamway

## Technologies Used

1. Frontend
   - TypeScript
   - Next.js
   - SWR
   - Zustand
   - Tailwind
2. Backend
   - Typescript
   - Express
   - Sequelize
   - PostgreSQL
3. Docker

> **Prerequisites:** <br/>
>
> 1. Docker installed on your system. <br/>
> 2. Node.js and npm or yarn installed.

## How to run the project

1.  Clone the repository

        git clone git@github.com:RomanVII-2022/personality.git

2.  Navigate to the project directory

        cd personality

3.  Run the Docker containers

        docker compose up

4.  Restore the sql dump - the dump is on the root directory, "personality.sql"

        docker container exec -i <postgres_container_id> psql -U postgres personality < personality.sql

5.  Access the application in your browser

        http://localhost:3000

## How it works

1. Click on the Get started button
2. Select one of the choices provided
3. Click on the Next button or scroll to the right
4. Repeat step 2 and 3 above for all the five questions
5. Click on the Submit button
6. See the results computed in respect to the answers you have choosen

## Reason for choosing the above technologies

1. **Typescript**

   - Prevents runtime errors with strong typing.
   - Improves code readability and maintainability.
   - Offers better IDE support with autocompletion and refactoring.

2. **Next.js**

   - Provides server-side rendering for improved SEO and faster initial page loads.
   - Built-in routing and API support simplify development.

3. **SWR**

   - Automatic caching and revalidation reduce redundant network requests.
   - Provides an intuitive API for handling remote data.
   - Easy integration with any REST.

4. **Zustand**

   - Lightweight and unopinionated, making it easy to integrate.
   - Provides a simple API for managing complex state.
   - Avoids unnecessary re-renders with finely tuned subscriptions.

5. **Express**

   - Minimalist framework, providing flexibility for application structure.
   - Scales well for small to medium-sized applications.

6. **Sequelize**

   - Abstracts database interactions, reducing the need for manual SQL queries.
   - Supports migrations, making schema changes easier to manage.
   - Provides robust support for associations, validations, and hooks.

7. **PostgreSQL**

   - ACID-compliant transactions ensure data integrity.
   - Highly scalable and reliable for handling large datasets.

8. **Docker**
   - Portability - Runs consistently across different environments
   - Simplified Deployment - packages the application and its dependencies into a single image.
   - Resource Isolation - ensures isolated environments for different services, preventing conflicts.
   - Scalability - easily scale applications using Docker Compose.
