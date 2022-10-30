# hexo-toc

> Insert a markdown TOC(Table Of Content) before posts be rendered.

Inject a TOC only when a placeholder(`<!-- toc -->`) found in the raw markdown files. And the TOC will be injected after the placeholder.

All you need to do is placing a placeholder(`<!-- toc -->`) in your post when and where needed.

## Install

```node
npm install hexo-toc --save
```

## Options

All the options of [markdown-toc](https://github.com/jonschlinkert/markdown-toc),
slugify function, and heading anchor options can be specified as follow in your `_config.yml`:

```yaml
toc:
  maxdepth: 3
  class: toc
  slugify: transliteration
  decodeEntities: false
```

- `maxdepth`: Use headings whose depth is at most maxdepth.
- `class`: The CSS Class for the toc. (*Default is `false`*)
- `slugify`: Choose which slugify function you want to use. Currently support [uslug](https://github.com/jeremys/uslug) (*Default*) and [transliteration](https://github.com/andyhu/node-transliteration).
- `decodeEntities`: Select whether to enable decode entities. ( *Default is `false`* and please see [#15](https://github.com/bubkoo/hexo-toc/pull/15)).
