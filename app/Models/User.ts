import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public email: string

  @column()
  public username: string

  @column()
  public password: string

  @column()
  public type_of_user: string

  @column()
  public location_lg: number

  @column()
  public location_lt: number

  @column()
  public adress: string

  @column()
  public country: string

  @column()
  public ipadress: string

  @column()
  public otp: number

  @column()
  public phone_number: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime 

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
