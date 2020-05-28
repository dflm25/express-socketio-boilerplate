/**
 * Config load .env vars
 */

import { config } from 'dotenv'

// Load env
config();

function required(key) {
    throw new Error(`${key} is required env variable.`)
}

export default {
    APP_PORT: process.env.APP_PORT || required('APP_PORT'),
    JWT_SECRET: process.env.JWT_SECRET || required('JWT_SECRET'),
    MONGO_URL: process.env.MONGO_URL || required('MONGO_URL'),
    MYSQL: {
        "crm": {
            "database": process.env.DB_CRM_DATABASE || required('DB_CRM_DATABASE'),
            "username": process.env.DB_CRM_USER || required('DB_CRM_USER'),
            "password": process.env.DB_CRM_PASS || required('DB_CRM_PASS'),
            "host": process.env.DB_CRM_HOST || required('DB_CRM_HOST'),
            "port": process.env.DB_CRM_PORT || required('DB_CRM_PORT'),
            "dialect": "mysql"
        },
        "cm": {
            "database": process.env.DB_CRM_DATABASE || required('DB_CM_DATABASE'),
            "username": process.env.DB_CRM_USER || required('DB_CM_USER'),
            "password": process.env.DB_CRM_PASS || required('DB_CM_PASS'),
            "host": process.env.DB_CRM_HOST || required('DB_CM_HOST'),
            "port": process.env.DB_CRM_PORT || required('DB_CM_PORT'),
            "dialect": "mysql"
        },
    }
}