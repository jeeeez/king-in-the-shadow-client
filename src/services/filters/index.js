/**
 * 自定义过滤器
 * @authors Picker Lee (https://github.com/pickerlee)
 * @email   450994392@qq.com
 * @date    2016-10-27 23:24:04
 */

import Vue from 'vue';

import date from './date';

Vue.filter('formatDate', date.format);
