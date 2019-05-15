import React from 'react'
import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger' // 日志记录 state变更
import promise from 'redux-promise-middleware' // actions中支持异步


const storeConfig = createStore({

})