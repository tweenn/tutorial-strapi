'use strict';

/**
 * Trivia.js controller
 *
 * @description: A set of functions called "actions" for managing `Trivia`.
 */

module.exports = {

  /**
   * Retrieve trivia records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.trivia.search(ctx.query);
    } else {
      return strapi.services.trivia.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a trivia record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.trivia.fetch(ctx.params);
  },

  /**
   * Count trivia records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.trivia.count(ctx.query);
  },

  /**
   * Create a/an trivia record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.trivia.add(ctx.request.body);
  },

  /**
   * Update a/an trivia record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.trivia.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an trivia record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.trivia.remove(ctx.params);
  }
};
