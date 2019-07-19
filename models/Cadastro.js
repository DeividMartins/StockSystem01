'use strict'

module.exports = (sequelize, DataTypes) => {

    const Cadastro = sequelize.define('Cadastro', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        nome_empresa: {
            type: DataTypes.STRING,
            required: true,
            field: 'nome_empresa'
        },
        nome_gerente:{
            type: DataTypes.STRING,
            required: true,
            field: 'nome_gerente'
        },
        telefone:{
            type: DataTypes.STRING,
            required: true,
            field: 'telefone'
        },
        rua:{
            type: DataTypes.STRING,
            required: true,
            field: 'rua'
        },
        numero: {
            type: DataTypes.INTEGER,
            required: true,
            field: 'numero'
        },
        cep: {
            type: DataTypes.STRING,
            required: true,
            field: 'cep'
        },
        estado:{
            type: DataTypes.STRING,
            required: true,
            field: 'estado'
        },
        email:{
            type: DataTypes.STRING,
            required: true,
            field: 'email'
        },
        senha: {
            type: DataTypes.STRING,
            required: true,
            field: 'senha'
        }
    }, {
            freezeTableName: true,
            schema: 'public',
            tableName: 'cadastro',
            timestamps: false
        })

    return Cadastro
}