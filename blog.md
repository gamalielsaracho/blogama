---
layout: default
title: Blog
imagenMeta: https://www.djangoproject.com/s/img/logos/django-logo-negative.png
permalink: /blog/
---

### Bienvenido al blog rural :)

A place to include any other types of information that you'd like to include about yourself.

<div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>

[email@domain.com](mailto:email@domain.com)
