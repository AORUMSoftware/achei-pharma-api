export const dbStringPostgreSQL = {
    "user": process.env.ACHEI_PHARMA_DB_USER || 'postgres',
    "password":  process.env.ACHEI_PHARMA_DB_PWD || 'adminpg1234@',
    "host":  process.env.ACHEI_PHARMA_DB_HOST || "localhost",
    "database":  process.env.ACHEI_PHARMA_DB_NAME || 'acheipharma',
    "port": process.env.ACHEI_PHARMA_DB_PORT || 5432
};

export const apiToken = process.env.ACHEI_PHARMA_API_TOKEN || "1943516f-6962-453b-8842-d0d8546fa009";
