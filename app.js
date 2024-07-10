"use strict";


const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data and convert to object:
app.use(express.json())

// AsyncErrors to errorHandler:
require('express-async-errors')

const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize('sqlite:' + (process.env.SQLITE || './db.sqlite3'))

const Todo = sequelize.define('todos',{

    title:{
        type:DataTypes.STRING(256), //arka planda varchar(256)
        allowNull:false
    },

    author:{
        type:DataTypes.STRING(256), //arka planda varchar(256)
        allowNull:false
    },

    ISBN:{
        type:DataTypes.STRING(256), //arka planda varchar(256)
        allowNull:false
    },
    genre:{
        type:DataTypes.STRING(256), //arka planda varchar(256)
        allowNull:false
    },
    publicationYear:{
        type:DataTypes.DataTypes,
        allowNull:false
    },
    image:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    }
})

