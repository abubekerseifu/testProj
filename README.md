# Test proj


## Setup Instructions

To set up the project, follow these steps:

1. Clone the project repository:
git clone https://github.com/abubekerseifu/testProj.git

2. Install the required dependencies:
npm install

3. Create a copy of the `.env.sample` file and rename it to `.env`. Make any necessary changes to the `.env` file to configure the project.

4. Run the following commands to create and migrate the database:
npx sequelize-cli db:create
npx sequelize-cli db:migrate

5. (Optional) If there are any seed data required, run the following command to seed the database:
npx sequelize-cli db:seed:all

6. Start the development server:
npm run dev

## Usage

After setting up the project, you can use it by localhost:3030 or port you provided in .env
