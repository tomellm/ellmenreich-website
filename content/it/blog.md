---
layout: blog.njk
title: Blog
description: "Novità dalla famiglia Ellmenreich"
pagination:
    data: collections.posts_it
    size: 10
    reverse: true
    generatePageOnEmptyData: true
permalink: "it/blog/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
