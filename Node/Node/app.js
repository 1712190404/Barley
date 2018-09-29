"use strict";
import { square, diag } from "./lib";
const nodeEvent = require("./nodeEvent");
const Bufferdemo = require("./buffer");
const Streamdemo = require("./stream");
import {
  fileWrite,
  fileWriteSync,
  fileWriteAsync,
  fileWriteStream,
  fileRead,
  fileReadSync,
  fileReadAsync,
  fileReadStream,
  fileStats,
  fileReaddir
} from "./fileSystem";
import{
    httpServerStatic,
    httpClientStatic,
    httpServerGet,
    httpClientGet,
    httpServerPost,
    httpClientPost,
    httpServerExternal
} from "./httpService";

// import simple_timer_demo from './nodeEvent/simple_timer'

// console.log(square(11)); // 121
// console.log(diag(4, 3)); // 5

// nodeEvent.simple_timer();
// nodeEvent.simple_interval();
// nodeEvent.nexttick_demo();
// nodeEvent.timeout_immediate();
// nodeEvent.emitter_listener_demo();
// nodeEvent.callback_parameter_demo();
// nodeEvent.callback_closure_demo();
// nodeEvent.callback_chain_demo();

// Bufferdemo.buffer_write();
// Bufferdemo.buffer_read();
// Bufferdemo.buffer_copy();
// Bufferdemo.buffer_slice();
// Bufferdemo.buffer_concat();

// Streamdemo.strean_read();
// Streamdemo.strem_write();
// Streamdemo.stream_duplex();
// Streamdemo.stream_transform();
// Streamdemo.stream_piped();
// Streamdemo.zip_buffers();
// Streamdemo.zlib_file();

// fileWrite();
// fileWriteSync();
// fileWriteAsync();
// fileWriteStream();
// fileRead();
// fileReadSync();
// fileReadAsync();
// fileReadStream();
// fileStats();
// fileReaddir();

// httpServerStatic();
// httpClientStatic();
// httpServerGet();
// httpClientGet();
// httpServerPost();
// httpClientPost();
httpServerExternal();