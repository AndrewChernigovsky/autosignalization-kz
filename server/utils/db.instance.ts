import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('autosygnal', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost',
})
