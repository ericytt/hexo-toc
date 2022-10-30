/* globals hexo: true */

var assign = require('object-assign');
var toc = require('markdown-toc');

var config = hexo.config.toc || {};
hexo.config.toc = assign({}, config, {
  slugify: function(name) {
    var slugify;
    if (name && typeof name === 'string') {
      switch (name) {
        case 'transliteration':
          slugify = require('transliteration').slugify;
          break;
        default:
          slugify = require('uslug');
          break;
      }
    } else {
      slugify = require('uslug');
    }
    return slugify;
  }(config.slugify)
});

hexo.extend.filter.register('before_post_render', function(data) {
  var options = assign({}, this.config.toc);

  // add class option
  if (options.class) {
    data.content = data.content.replace("<!-- toc -->", '<div class="' + options.class + 'start"></div><!-- toc --><div class="' + options.class + 'end"></div>');
  }

  data.content = toc.insert(data.content, options);
  return data;
});
