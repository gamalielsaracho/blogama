---
layout: default
title: Programming tutorials, software development process, opinion articles, lived experiences and much more.
description: Programming tutorials, software development process, opinion articles, lived experiences and much more.

imagenMeta: ./images/Software-Engineering.jpg

permalink: /blog/
---

<div class='posts-list'>
  <div class='posts-list__container-max'>
    {% for post in site.posts %}
      <div class='posts-list__post-container'>
        <div class='posts-list__container-image'>
            <img class='posts-list__image' src='{{ post.imagenIcono }}'/>
        </div>
        <a href="{{ site.baseurl }}{{ post.url }}">
            <h1>{{ post.title }}</h1>
        </a>
    
        <p>{{ post.fechaPost }}</p>
      </div>
    {% endfor %}
  </div>
</div>

<!-- <div class="posts">
  {% for post in site.posts %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="entry">
        {{ post.excerpt }}
      </div>

    </article>
  {% endfor %}
</div> -->

