---
layout: default
title: El Blog rural
description: Una descripción sobre el blog rural :)

imagenMeta: https://hosting.3bro.info/wp-content/uploads/2018/06/nodejs-34c5f8cc37f0756108c490a903d80176.png

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

