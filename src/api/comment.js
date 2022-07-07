import request from '@/utils/request'

/**
 *@param type  评论类型，a-对文章的评论  ，c-对评论的回复
 *@param source  源id，文章id或评论id
 * @param offset  ....a-对文章的评论  ，c-对评论的回复
 * @param limit    ....a-对文章的评论  ，c-对评论的回复
 * @returns
 */
export const getCommentList = ({ type, source, offset, limit }) => {
  return request({
    url: '/comments',
    params: {
      type,
      source,
      offset,
      limit
    }
  })
}

export const addLike = (target) => {
  return request({
    method: 'POST',
    url: '/comment/likings',
    data: {
      target
    }
  })
}

/**
 *取消点赞
 * @param {要取消电子的评论id或评论回复id} target
 * @returns
 */
export const delLike = (target) => {
  return request({
    method: 'DELETE',
    url: `/comment/likings/${target}`
  })
}

/**
 *target  文章id或作者评论的id
 *content内容
 *art_id文章id，对评论内容发表回复时，需要传此参数，表名文章id
 * @param {*} data
 * @returns
 */
export const addComment = (data) => {
  return request({
    method: 'POST',
    url: '/comments',
    data
  })
}
