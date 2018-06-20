
//This is for using stimulus-js
import { Application } from 'stimulus'
//This is for loading helpers
import { autoload } from 'stimulus/webpack-helpers'

const  application = Application.start()
//This is for loading controllers from every .js files(we used regex)
const controllers = require.context("./controllers", true, /\.js$/)
autoload(controllers, application)