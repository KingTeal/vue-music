/**
 * 封装的api配置
 * 使用方法： import { url } from '@/config/api.js'
 */
import { post, fetch } from "../config/axios";

export default {
  // 获取单个歌单歌曲
  getsinglesongs(params) {
    return fetch('/songList', params)
  },

  // 搜索音乐/专辑/歌词/歌单/MV/用户/歌手/电台搜索
  searchsongsheet(params) {
    return fetch('/search', params)
  },

  // 获取热门歌单
  gethotsong(params) {
    return fetch('/hotSongList', params)
  },

  // 获取专辑详情
  getdetailalbum(params) {
    return fetch('/album', params)
  },

  // 获取音乐详情
  getmusicdetail(params) {
    return fetch('/song', params)
  },

  // 获取音乐播放地址
  getsongsurl(params) {
    return fetch('/url', params)
  },

  // 获取音乐歌词
  getSongText(params) {
    return fetch('/lrc', params)
  },

  // 获取音乐图片
  getmusicpicurl(params) {
    return fetch('/pic', params)
  },

  // 获取MV信息
  getmvinfo(params) {
    return fetch('/mv', params)
  },

  // 获取MV播放地址
  getmvurl(params) {
    return fetch('/mvUrl', params)
  },

  // 获取歌单分类
  getsonglistclass(params) {
    return fetch('/songListCategory', params)
  },

  // 获取精品歌单
  getgoodsonglist(params) {
    return fetch('/highQualitySongList', params)
  },

  // 获取MV排行榜
  getmvtoplist(params) {
    return fetch('/topMvList', params)
  },

  // 获取用户歌单信息
  getusersonginfo(params) {
    return fetch('/userSongList', params)
  }
}
