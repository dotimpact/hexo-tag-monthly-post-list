# Monthly post list
block tag plugin for generate monthly post list

## Install
```
npm install git+https://git@github.com/dotimpact/hexo-tag-monthly-post-list.git
```

## Usage
generate all post list in this month
```
{% monthly_post_list %}
```
generate all post list in specific month
```
{% monthly_post_list 01 %}
{% monthly_post_list 201412 %}
```
generate tagged posts in specific month
```
{% monthly_post_list 01 book %}
```
