import request from '@/utils/request'

export default {
  fetchDictList: params => request({
    url: '/ssm/dict/list',
    method: 'post',
    params: params
  }),
  saveDict: params => request({
    url: '/ssm/dict/save',
    method: 'post',
    params: params
  }),
  removeDict: ids => request({
    url: '/ssm/dict/remove',
    method: 'delete',
    params: {ids}
  })
}
