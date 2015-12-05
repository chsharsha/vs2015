



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>bootstrap-slider/bootstrap-slider.js at master · seiyria/bootstrap-slider</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="seiyria/bootstrap-slider" name="twitter:title" /><meta content="A complete rewrite of the original bootstrap-slider by Stefan Petre." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/763609?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/763609?v=3&amp;s=400" property="og:image" /><meta content="seiyria/bootstrap-slider" property="og:title" /><meta content="https://github.com/seiyria/bootstrap-slider" property="og:url" /><meta content="A complete rewrite of the original bootstrap-slider by Stefan Petre." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/OTk0NTIzODo0NGQ4NDdkMjFkNzg0YWNjZjY5ZGRiMTQzNjEzYzhjZDo3OTEzM2Q2ZjViM2Y5NDM3Zjg5ZDBmZGZlNmE0OGZkZjEwYTNlZDZkY2NkMzM5NDgwODE1NTA1ODQ5YjM0ZTE3--568ae657489b034edb9750cb16e24f253dc2447e">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="48E7D3D6:4BBC:3874987:5662806F" name="octolytics-dimension-request_id" /><meta content="9945238" name="octolytics-actor-id" /><meta content="chsharsha" name="octolytics-actor-login" /><meta content="1abba2397c0797ec619094a06b5ceb9e75b25937b97d2ec35d676a0321623855" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="chsharsha">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="1e591ed2aa024d3c567422b47182d7c3d6a86a44" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-980086798633a7804d9e6353689ba4c79120d0f4a6264214d08411a5f3c6116a.css" integrity="sha256-mACGeYYzp4BNnmNTaJukx5Eg0PSmJkIU0IQRpfPGEWo=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-e8884d9e57e2b8a7a08c24b9472e770d594a80d295ec923fc734d3da544eef73.css" integrity="sha256-6IhNnlfiuKegjCS5Ry53DVlKgNKV7JI/xzTT2lRO73M=" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="54a3408bfbdaab0b7780f3ce09e8c3d4">

      
  <meta name="description" content="A complete rewrite of the original bootstrap-slider by Stefan Petre.">
  <meta name="go-import" content="github.com/seiyria/bootstrap-slider git https://github.com/seiyria/bootstrap-slider.git">

  <meta content="763609" name="octolytics-dimension-user_id" /><meta content="seiyria" name="octolytics-dimension-user_login" /><meta content="11111023" name="octolytics-dimension-repository_id" /><meta content="seiyria/bootstrap-slider" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="11111023" name="octolytics-dimension-repository_network_root_id" /><meta content="seiyria/bootstrap-slider" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/seiyria/bootstrap-slider/commits/master.atom" rel="alternate" title="Recent Commits to bootstrap-slider:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/seiyria/bootstrap-slider/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/seiyria/bootstrap-slider/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:chsharsha"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="seiyria/bootstrap-slider">This repository</span>
  </div>
    <a class="dropdown-item" href="/seiyria/bootstrap-slider/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/chsharsha"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@chsharsha" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/9945238?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">chsharsha</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/chsharsha" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="1e591ed2aa024d3c567422b47182d7c3d6a86a44" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="/Aqb+zlYe4UOJFckMXeFaOjsWwvzVDzMxoeaD1tByw+yTFT0v0J/4+i7zRPUfMKCTpoL0vjtkTGI8YSkzXNYtw==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="1e591ed2aa024d3c567422b47182d7c3d6a86a44" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="UD6trsczVBQ9wwgTR488YkTkHjhNiNvJY8fuDnHBKVJLz9mDCAcUjzUPJPl+M5CE2JjV8Fq+wYlUS0+RbBNo0Q==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="11111023" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/seiyria/bootstrap-slider/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <span class="octicon octicon-eye"></span>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/seiyria/bootstrap-slider/watchers">
            70
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-mute"></span>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/seiyria/bootstrap-slider/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="1e591ed2aa024d3c567422b47182d7c3d6a86a44" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="QVyM+KIwIsQlxDMZRZZBI5bCRtvR76legF8Fip5gxr734scK5W5escVykVffj8WF3hwT+H7DkfYulpemNDfyZw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar seiyria/bootstrap-slider"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/seiyria/bootstrap-slider/stargazers">
          1,153
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/seiyria/bootstrap-slider/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="1e591ed2aa024d3c567422b47182d7c3d6a86a44" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lcRoWFVQ6wFJMmEtgJzwoCZ0w0GJB6xroNsvcrKbFhsr9SkYnIra6w9Oh+CjlOdQg1XuYoZ3xOvGVVG5AyizXg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star seiyria/bootstrap-slider"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/seiyria/bootstrap-slider/stargazers">
          1,153
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/seiyria/bootstrap-slider/fork" class="btn-with-count" data-form-nonce="1e591ed2aa024d3c567422b47182d7c3d6a86a44" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0F8m+vpT4rN/WRe4mZIUmrWQ+jo3EwP8oe8/A7X6DUiijvf7s+NsNDOK6XpLJaqo2GUbES82FY65QuHFRj8asg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of seiyria/bootstrap-slider to your account"
                aria-label="Fork your own copy of seiyria/bootstrap-slider to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
</form>
    <a href="/seiyria/bootstrap-slider/network" class="social-count">
      455
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="octicon octicon-repo"></span>
  <span class="author"><a href="/seiyria" class="url fn" itemprop="url" rel="author"><span itemprop="title">seiyria</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/seiyria/bootstrap-slider" data-pjax="#js-repo-pjax-container">bootstrap-slider</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/seiyria/bootstrap-slider/issues/counts">

  <a href="/seiyria/bootstrap-slider" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /seiyria/bootstrap-slider">
    <span class="octicon octicon-code"></span>
    Code
</a>
    <a href="/seiyria/bootstrap-slider/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /seiyria/bootstrap-slider/issues">
      <span class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">56</span>

</a>
  <a href="/seiyria/bootstrap-slider/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /seiyria/bootstrap-slider/pulls">
    <span class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">5</span>

</a>
    <a href="/seiyria/bootstrap-slider/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /seiyria/bootstrap-slider/wiki">
      <span class="octicon octicon-book"></span>
      Wiki
</a>
  <a href="/seiyria/bootstrap-slider/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /seiyria/bootstrap-slider/pulse">
    <span class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/seiyria/bootstrap-slider/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /seiyria/bootstrap-slider/graphs">
    <span class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/seiyria/bootstrap-slider/blob/8b7f5bbe645b3ef93892a4871c17b29f5a21b62c/js/bootstrap-slider.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:cf169050b6987f8cf4d65d5d6bbe030f -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/seiyria/bootstrap-slider/blob/fixing-vertical-slider/js/bootstrap-slider.js"
               data-name="fixing-vertical-slider"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fixing-vertical-slider">
                fixing-vertical-slider
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/seiyria/bootstrap-slider/blob/gh-pages/js/bootstrap-slider.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/seiyria/bootstrap-slider/blob/master/js/bootstrap-slider.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/seiyria/bootstrap-slider/blob/min-range/js/bootstrap-slider.js"
               data-name="min-range"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="min-range">
                min-range
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/seiyria/bootstrap-slider/blob/npm-postpublish-push-to-gh-pages/js/bootstrap-slider.js"
               data-name="npm-postpublish-push-to-gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="npm-postpublish-push-to-gh-pages">
                npm-postpublish-push-to-gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/seiyria/bootstrap-slider/blob/relayout-tests/js/bootstrap-slider.js"
               data-name="relayout-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="relayout-tests">
                relayout-tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/seiyria/bootstrap-slider/blob/reversed-ticks/js/bootstrap-slider.js"
               data-name="reversed-ticks"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="reversed-ticks">
                reversed-ticks
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/seiyria/bootstrap-slider/blob/tick_marks/js/bootstrap-slider.js"
               data-name="tick_marks"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="tick_marks">
                tick_marks
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/seiyria/bootstrap-slider/blob/ticks-reversed-tests/js/bootstrap-slider.js"
               data-name="ticks-reversed-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="ticks-reversed-tests">
                ticks-reversed-tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/seiyria/bootstrap-slider/blob/tooltip-position-tests/js/bootstrap-slider.js"
               data-name="tooltip-position-tests"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="tooltip-position-tests">
                tooltip-position-tests
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/seiyria/bootstrap-slider/blob/tooltip-position/js/bootstrap-slider.js"
               data-name="tooltip-position"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="tooltip-position">
                tooltip-position
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.3.1/js/bootstrap-slider.js"
                 data-name="v5.3.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.3.1">v5.3.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.3.0/js/bootstrap-slider.js"
                 data-name="v5.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.3.0">v5.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.2.6/js/bootstrap-slider.js"
                 data-name="v5.2.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.2.6">v5.2.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.2.5/js/bootstrap-slider.js"
                 data-name="v5.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.2.5">v5.2.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.2.4/js/bootstrap-slider.js"
                 data-name="v5.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.2.4">v5.2.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.2.3/js/bootstrap-slider.js"
                 data-name="v5.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.2.3">v5.2.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.2.1/js/bootstrap-slider.js"
                 data-name="v5.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.2.1">v5.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.1.3/js/bootstrap-slider.js"
                 data-name="v5.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.1.3">v5.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.1.2/js/bootstrap-slider.js"
                 data-name="v5.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.1.2">v5.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.1.1/js/bootstrap-slider.js"
                 data-name="v5.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.1.1">v5.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.1.0/js/bootstrap-slider.js"
                 data-name="v5.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.1.0">v5.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.13/js/bootstrap-slider.js"
                 data-name="v5.0.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.13">v5.0.13</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.12/js/bootstrap-slider.js"
                 data-name="v5.0.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.12">v5.0.12</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.11/js/bootstrap-slider.js"
                 data-name="v5.0.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.11">v5.0.11</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.10/js/bootstrap-slider.js"
                 data-name="v5.0.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.10">v5.0.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.9/js/bootstrap-slider.js"
                 data-name="v5.0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.9">v5.0.9</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.8/js/bootstrap-slider.js"
                 data-name="v5.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.8">v5.0.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.7/js/bootstrap-slider.js"
                 data-name="v5.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.7">v5.0.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.6/js/bootstrap-slider.js"
                 data-name="v5.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.6">v5.0.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.5/js/bootstrap-slider.js"
                 data-name="v5.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.5">v5.0.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.4/js/bootstrap-slider.js"
                 data-name="v5.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.4">v5.0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.3/js/bootstrap-slider.js"
                 data-name="v5.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.3">v5.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.2/js/bootstrap-slider.js"
                 data-name="v5.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.2">v5.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.1/js/bootstrap-slider.js"
                 data-name="v5.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.1">v5.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v5.0.0/js/bootstrap-slider.js"
                 data-name="v5.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v5.0.0">v5.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.14.5/js/bootstrap-slider.js"
                 data-name="v4.14.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.14.5">v4.14.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.14.4/js/bootstrap-slider.js"
                 data-name="v4.14.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.14.4">v4.14.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.14.3/js/bootstrap-slider.js"
                 data-name="v4.14.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.14.3">v4.14.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.14.2/js/bootstrap-slider.js"
                 data-name="v4.14.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.14.2">v4.14.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.14.1/js/bootstrap-slider.js"
                 data-name="v4.14.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.14.1">v4.14.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.14.0/js/bootstrap-slider.js"
                 data-name="v4.14.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.14.0">v4.14.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.13.1/js/bootstrap-slider.js"
                 data-name="v4.13.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.13.1">v4.13.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.13.0/js/bootstrap-slider.js"
                 data-name="v4.13.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.13.0">v4.13.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.12.1/js/bootstrap-slider.js"
                 data-name="v4.12.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.12.1">v4.12.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.12.0/js/bootstrap-slider.js"
                 data-name="v4.12.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.12.0">v4.12.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.11.0/js/bootstrap-slider.js"
                 data-name="v4.11.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.11.0">v4.11.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.10.4/js/bootstrap-slider.js"
                 data-name="v4.10.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.10.4">v4.10.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.10.3/js/bootstrap-slider.js"
                 data-name="v4.10.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.10.3">v4.10.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.10.2/js/bootstrap-slider.js"
                 data-name="v4.10.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.10.2">v4.10.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.10.1/js/bootstrap-slider.js"
                 data-name="v4.10.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.10.1">v4.10.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.10.0/js/bootstrap-slider.js"
                 data-name="v4.10.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.10.0">v4.10.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.9.1/js/bootstrap-slider.js"
                 data-name="v4.9.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.9.1">v4.9.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.9.0/js/bootstrap-slider.js"
                 data-name="v4.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.9.0">v4.9.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.8.3/js/bootstrap-slider.js"
                 data-name="v4.8.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.8.3">v4.8.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.8.2/js/bootstrap-slider.js"
                 data-name="v4.8.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.8.2">v4.8.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.8.1/js/bootstrap-slider.js"
                 data-name="v4.8.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.8.1">v4.8.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.8.0/js/bootstrap-slider.js"
                 data-name="v4.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.8.0">v4.8.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.7.4/js/bootstrap-slider.js"
                 data-name="v4.7.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.7.4">v4.7.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.7.3/js/bootstrap-slider.js"
                 data-name="v4.7.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.7.3">v4.7.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.7.2/js/bootstrap-slider.js"
                 data-name="v4.7.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.7.2">v4.7.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.7.1/js/bootstrap-slider.js"
                 data-name="v4.7.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.7.1">v4.7.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.7.0/js/bootstrap-slider.js"
                 data-name="v4.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.7.0">v4.7.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.6.4/js/bootstrap-slider.js"
                 data-name="v4.6.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.6.4">v4.6.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.6.3/js/bootstrap-slider.js"
                 data-name="v4.6.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.6.3">v4.6.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.6.2/js/bootstrap-slider.js"
                 data-name="v4.6.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.6.2">v4.6.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.6.1/js/bootstrap-slider.js"
                 data-name="v4.6.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.6.1">v4.6.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.6.0/js/bootstrap-slider.js"
                 data-name="v4.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.6.0">v4.6.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.5.7/js/bootstrap-slider.js"
                 data-name="v4.5.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.5.7">v4.5.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.5.6/js/bootstrap-slider.js"
                 data-name="v4.5.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.5.6">v4.5.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.5.5/js/bootstrap-slider.js"
                 data-name="v4.5.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.5.5">v4.5.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.5.4/js/bootstrap-slider.js"
                 data-name="v4.5.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.5.4">v4.5.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.5.3/js/bootstrap-slider.js"
                 data-name="v4.5.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.5.3">v4.5.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.5.2/js/bootstrap-slider.js"
                 data-name="v4.5.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.5.2">v4.5.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.5.1/js/bootstrap-slider.js"
                 data-name="v4.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.5.1">v4.5.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.5.0/js/bootstrap-slider.js"
                 data-name="v4.5.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.5.0">v4.5.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.4.2/js/bootstrap-slider.js"
                 data-name="v4.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.4.2">v4.4.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.4.1/js/bootstrap-slider.js"
                 data-name="v4.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.4.1">v4.4.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.4.0/js/bootstrap-slider.js"
                 data-name="v4.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.4.0">v4.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.3.0/js/bootstrap-slider.js"
                 data-name="v4.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.3.0">v4.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.2.0/js/bootstrap-slider.js"
                 data-name="v4.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.2.0">v4.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.1.4/js/bootstrap-slider.js"
                 data-name="v4.1.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.1.4">v4.1.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.1.3/js/bootstrap-slider.js"
                 data-name="v4.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.1.3">v4.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.1.2/js/bootstrap-slider.js"
                 data-name="v4.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.1.2">v4.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.1.1/js/bootstrap-slider.js"
                 data-name="v4.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.1.1">v4.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.1.0/js/bootstrap-slider.js"
                 data-name="v4.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.1.0">v4.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.0.12/js/bootstrap-slider.js"
                 data-name="v4.0.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.12">v4.0.12</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.0.11/js/bootstrap-slider.js"
                 data-name="v4.0.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.11">v4.0.11</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.0.10/js/bootstrap-slider.js"
                 data-name="v4.0.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.10">v4.0.10</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.0.8/js/bootstrap-slider.js"
                 data-name="v4.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.8">v4.0.8</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.0.7/js/bootstrap-slider.js"
                 data-name="v4.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.7">v4.0.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.0.6/js/bootstrap-slider.js"
                 data-name="v4.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.6">v4.0.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.0.5/js/bootstrap-slider.js"
                 data-name="v4.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.5">v4.0.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.0.4/js/bootstrap-slider.js"
                 data-name="v4.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.4">v4.0.4</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.0.3/js/bootstrap-slider.js"
                 data-name="v4.0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.3">v4.0.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.0.2/js/bootstrap-slider.js"
                 data-name="v4.0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.2">v4.0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.0.1/js/bootstrap-slider.js"
                 data-name="v4.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.1">v4.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/v4.0.0/js/bootstrap-slider.js"
                 data-name="v4.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v4.0.0">v4.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/4.0.7/js/bootstrap-slider.js"
                 data-name="4.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="4.0.7">4.0.7</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/4.0.6/js/bootstrap-slider.js"
                 data-name="4.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="4.0.6">4.0.6</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/3.1.0/js/bootstrap-slider.js"
                 data-name="3.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.1.0">3.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/3.0.1/js/bootstrap-slider.js"
                 data-name="3.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.1">3.0.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/3.0.0/js/bootstrap-slider.js"
                 data-name="3.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="3.0.0">3.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/1.9.5/js/bootstrap-slider.js"
                 data-name="1.9.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.5">1.9.5</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/seiyria/bootstrap-slider/tree/1.9.0/js/bootstrap-slider.js"
                 data-name="1.9.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="1.9.0">1.9.0</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/seiyria/bootstrap-slider/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/seiyria/bootstrap-slider" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">bootstrap-slider</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/seiyria/bootstrap-slider/tree/master/js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator">/</span><strong class="final-path">bootstrap-slider.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/seiyria/bootstrap-slider/commit/ffe80bc2c52078462cfe8956947f98241e0122ce" data-pjax>
          ffe80bc
        </a>
        <time datetime="2015-11-30T11:34:55Z" is="relative-time">Nov 30, 2015</time>
      </span>
      <div>
        <img alt="@cornedor" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/570297?v=3&amp;s=40" width="20" />
        <a href="/cornedor" class="user-mention" rel="contributor">cornedor</a>
          <a href="/seiyria/bootstrap-slider/commit/ffe80bc2c52078462cfe8956947f98241e0122ce" class="message" data-pjax="true" title="Added aria-labelledby option">Added aria-labelledby option</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>70</strong>
         contributors
      </a>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="rovolution" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=rovolution"><img alt="@rovolution" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/437318?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="MelleB" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=MelleB"><img alt="@MelleB" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/265437?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="seiyria" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=seiyria"><img alt="@seiyria" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/763609?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rahatarmanahmed" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=rahatarmanahmed"><img alt="@rahatarmanahmed" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3174006?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="zonia3000" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=zonia3000"><img alt="@zonia3000" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/5459334?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jkrehm" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=jkrehm"><img alt="@jkrehm" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/999845?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="arjo1203" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=arjo1203"><img alt="@arjo1203" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/11197428?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="raulfortes" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=raulfortes"><img alt="@raulfortes" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/97687?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="Givized" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=Givized"><img alt="@Givized" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/12510666?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="j0hnsmith" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=j0hnsmith"><img alt="@j0hnsmith" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/118963?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mitsos1os" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=mitsos1os"><img alt="@mitsos1os" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/8208733?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dnelson86" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=dnelson86"><img alt="@dnelson86" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/3587498?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="cornedor" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=cornedor"><img alt="@cornedor" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/570297?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="lamplightdev" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=lamplightdev"><img alt="@lamplightdev" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/898995?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="James1x0" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=James1x0"><img alt="@James1x0" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/6146261?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="pmoncunill" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=pmoncunill"><img alt="@pmoncunill" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/6929559?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jrnewell" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=jrnewell"><img alt="@jrnewell" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/6483213?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="wdm954" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=wdm954"><img alt="@wdm954" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/844423?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="dzaman" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=dzaman"><img alt="@dzaman" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/3486978?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="loomchild" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=loomchild"><img alt="@loomchild" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/2506014?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="yalcindo" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=yalcindo"><img alt="@yalcindo" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/2654756?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="stpkys" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=stpkys"><img alt="@stpkys" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/518196?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="krzysiek1507" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=krzysiek1507"><img alt="@krzysiek1507" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/8144559?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kirilvit" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=kirilvit"><img alt="@kirilvit" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/3276325?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="kellenp" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=kellenp"><img alt="@kellenp" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1723766?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="timmywil" href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js?author=timmywil"><img alt="@timmywil" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/192451?v=3&amp;s=40" width="20" /> </a>

    <a href="#blob_contributors_box" rel="facebox" class="others-text">and others</a>

    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@rovolution" height="24" src="https://avatars2.githubusercontent.com/u/437318?v=3&amp;s=48" width="24" />
            <a href="/rovolution">rovolution</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@MelleB" height="24" src="https://avatars1.githubusercontent.com/u/265437?v=3&amp;s=48" width="24" />
            <a href="/MelleB">MelleB</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@seiyria" height="24" src="https://avatars2.githubusercontent.com/u/763609?v=3&amp;s=48" width="24" />
            <a href="/seiyria">seiyria</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rahatarmanahmed" height="24" src="https://avatars2.githubusercontent.com/u/3174006?v=3&amp;s=48" width="24" />
            <a href="/rahatarmanahmed">rahatarmanahmed</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@zonia3000" height="24" src="https://avatars2.githubusercontent.com/u/5459334?v=3&amp;s=48" width="24" />
            <a href="/zonia3000">zonia3000</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jkrehm" height="24" src="https://avatars1.githubusercontent.com/u/999845?v=3&amp;s=48" width="24" />
            <a href="/jkrehm">jkrehm</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@arjo1203" height="24" src="https://avatars0.githubusercontent.com/u/11197428?v=3&amp;s=48" width="24" />
            <a href="/arjo1203">arjo1203</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@raulfortes" height="24" src="https://avatars0.githubusercontent.com/u/97687?v=3&amp;s=48" width="24" />
            <a href="/raulfortes">raulfortes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Givized" height="24" src="https://avatars1.githubusercontent.com/u/12510666?v=3&amp;s=48" width="24" />
            <a href="/Givized">Givized</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@j0hnsmith" height="24" src="https://avatars0.githubusercontent.com/u/118963?v=3&amp;s=48" width="24" />
            <a href="/j0hnsmith">j0hnsmith</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mitsos1os" height="24" src="https://avatars3.githubusercontent.com/u/8208733?v=3&amp;s=48" width="24" />
            <a href="/mitsos1os">mitsos1os</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dnelson86" height="24" src="https://avatars0.githubusercontent.com/u/3587498?v=3&amp;s=48" width="24" />
            <a href="/dnelson86">dnelson86</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@cornedor" height="24" src="https://avatars2.githubusercontent.com/u/570297?v=3&amp;s=48" width="24" />
            <a href="/cornedor">cornedor</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@lamplightdev" height="24" src="https://avatars0.githubusercontent.com/u/898995?v=3&amp;s=48" width="24" />
            <a href="/lamplightdev">lamplightdev</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@James1x0" height="24" src="https://avatars1.githubusercontent.com/u/6146261?v=3&amp;s=48" width="24" />
            <a href="/James1x0">James1x0</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@pmoncunill" height="24" src="https://avatars3.githubusercontent.com/u/6929559?v=3&amp;s=48" width="24" />
            <a href="/pmoncunill">pmoncunill</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jrnewell" height="24" src="https://avatars2.githubusercontent.com/u/6483213?v=3&amp;s=48" width="24" />
            <a href="/jrnewell">jrnewell</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@wdm954" height="24" src="https://avatars1.githubusercontent.com/u/844423?v=3&amp;s=48" width="24" />
            <a href="/wdm954">wdm954</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dzaman" height="24" src="https://avatars1.githubusercontent.com/u/3486978?v=3&amp;s=48" width="24" />
            <a href="/dzaman">dzaman</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@loomchild" height="24" src="https://avatars2.githubusercontent.com/u/2506014?v=3&amp;s=48" width="24" />
            <a href="/loomchild">loomchild</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@yalcindo" height="24" src="https://avatars1.githubusercontent.com/u/2654756?v=3&amp;s=48" width="24" />
            <a href="/yalcindo">yalcindo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@stpkys" height="24" src="https://avatars3.githubusercontent.com/u/518196?v=3&amp;s=48" width="24" />
            <a href="/stpkys">stpkys</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@krzysiek1507" height="24" src="https://avatars3.githubusercontent.com/u/8144559?v=3&amp;s=48" width="24" />
            <a href="/krzysiek1507">krzysiek1507</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kirilvit" height="24" src="https://avatars2.githubusercontent.com/u/3276325?v=3&amp;s=48" width="24" />
            <a href="/kirilvit">kirilvit</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@kellenp" height="24" src="https://avatars2.githubusercontent.com/u/1723766?v=3&amp;s=48" width="24" />
            <a href="/kellenp">kellenp</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@timmywil" height="24" src="https://avatars2.githubusercontent.com/u/192451?v=3&amp;s=48" width="24" />
            <a href="/timmywil">timmywil</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jbogdani" height="24" src="https://avatars1.githubusercontent.com/u/1449293?v=3&amp;s=48" width="24" />
            <a href="/jbogdani">jbogdani</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@thomato" height="24" src="https://avatars0.githubusercontent.com/u/499767?v=3&amp;s=48" width="24" />
            <a href="/thomato">thomato</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Nu-hin" height="24" src="https://avatars0.githubusercontent.com/u/1252339?v=3&amp;s=48" width="24" />
            <a href="/Nu-hin">Nu-hin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@riga" height="24" src="https://avatars2.githubusercontent.com/u/1908734?v=3&amp;s=48" width="24" />
            <a href="/riga">riga</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@inamiy" height="24" src="https://avatars3.githubusercontent.com/u/138476?v=3&amp;s=48" width="24" />
            <a href="/inamiy">inamiy</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@Bhoft" height="24" src="https://avatars2.githubusercontent.com/u/1777147?v=3&amp;s=48" width="24" />
            <a href="/Bhoft">Bhoft</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@HeikoH" height="24" src="https://avatars1.githubusercontent.com/u/2171931?v=3&amp;s=48" width="24" />
            <a href="/HeikoH">HeikoH</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@deathwebo" height="24" src="https://avatars3.githubusercontent.com/u/8619982?v=3&amp;s=48" width="24" />
            <a href="/deathwebo">deathwebo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gslender" height="24" src="https://avatars2.githubusercontent.com/u/2344457?v=3&amp;s=48" width="24" />
            <a href="/gslender">gslender</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@TheDartCode" height="24" src="https://avatars3.githubusercontent.com/u/10244532?v=3&amp;s=48" width="24" />
            <a href="/TheDartCode">TheDartCode</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@eyy" height="24" src="https://avatars2.githubusercontent.com/u/4493579?v=3&amp;s=48" width="24" />
            <a href="/eyy">eyy</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@dkrebs" height="24" src="https://avatars0.githubusercontent.com/u/5267327?v=3&amp;s=48" width="24" />
            <a href="/dkrebs">dkrebs</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@RopoMen" height="24" src="https://avatars3.githubusercontent.com/u/7492812?v=3&amp;s=48" width="24" />
            <a href="/RopoMen">RopoMen</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@sebtoun" height="24" src="https://avatars3.githubusercontent.com/u/4042158?v=3&amp;s=48" width="24" />
            <a href="/sebtoun">sebtoun</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@manthey" height="24" src="https://avatars0.githubusercontent.com/u/8781639?v=3&amp;s=48" width="24" />
            <a href="/manthey">manthey</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@crevete" height="24" src="https://avatars0.githubusercontent.com/u/6795189?v=3&amp;s=48" width="24" />
            <a href="/crevete">crevete</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@sesh-kebab" height="24" src="https://avatars3.githubusercontent.com/u/1439210?v=3&amp;s=48" width="24" />
            <a href="/sesh-kebab">sesh-kebab</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@psykode" height="24" src="https://avatars3.githubusercontent.com/u/2149882?v=3&amp;s=48" width="24" />
            <a href="/psykode">psykode</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@simshaun" height="24" src="https://avatars1.githubusercontent.com/u/379519?v=3&amp;s=48" width="24" />
            <a href="/simshaun">simshaun</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bool-dev" height="24" src="https://avatars3.githubusercontent.com/u/1561273?v=3&amp;s=48" width="24" />
            <a href="/bool-dev">bool-dev</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@gormanb" height="24" src="https://avatars2.githubusercontent.com/u/6105654?v=3&amp;s=48" width="24" />
            <a href="/gormanb">gormanb</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@bcroesch" height="24" src="https://avatars1.githubusercontent.com/u/402710?v=3&amp;s=48" width="24" />
            <a href="/bcroesch">bcroesch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ttsda" height="24" src="https://avatars2.githubusercontent.com/u/911097?v=3&amp;s=48" width="24" />
            <a href="/ttsda">ttsda</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@ahumphreys87" height="24" src="https://avatars2.githubusercontent.com/u/2510520?v=3&amp;s=48" width="24" />
            <a href="/ahumphreys87">ahumphreys87</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@andredurao" height="24" src="https://avatars3.githubusercontent.com/u/116623?v=3&amp;s=48" width="24" />
            <a href="/andredurao">andredurao</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/seiyria/bootstrap-slider/raw/master/js/bootstrap-slider.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/seiyria/bootstrap-slider/blame/master/js/bootstrap-slider.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/seiyria/bootstrap-slider/commits/master/js/bootstrap-slider.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop"></span>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/seiyria/bootstrap-slider/edit/master/js/bootstrap-slider.js" class="inline-form js-update-url-with-hash" data-form-nonce="1e591ed2aa024d3c567422b47182d7c3d6a86a44" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="4ysUJ4jUvKRVNGlSYGTOo8riEUBZxPe47AUww98fHhx35w451wL69Yl3mjpgY4PsvmsJTnJyuUWX4EZBk3QWTg==" /></div>
          <button class="octicon-btn tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <span class="octicon octicon-pencil"></span>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/seiyria/bootstrap-slider/delete/master/js/bootstrap-slider.js" class="inline-form" data-form-nonce="1e591ed2aa024d3c567422b47182d7c3d6a86a44" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Z1ay58/5/+iS1maB2I5BWZ9q3cR85on+x9Yaiei6caAfgK55O8Ya469YhO6eLzI4I581yFod8zVULsPv/Kvxcw==" /></div>
          <button class="octicon-btn octicon-btn-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <span class="octicon octicon-trashcan"></span>
          </button>
</form>  </div>

  <div class="file-info">
      1577 lines (1326 sloc)
      <span class="file-info-divider"></span>
    49.9 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*! =========================================================</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * bootstrap-slider.js</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Maintainers:</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *		Kyle Kemp</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *			- Twitter: @seiyria</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *			- Github:  seiyria</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *		Rohit Kalkur</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *			- Twitter: @Rovolutionary</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *			- Github:  rovolution</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * =========================================================</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * you may not use this file except in compliance with the License.</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * You may obtain a copy of the License at</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * http://www.apache.org/licenses/LICENSE-2.0</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Unless required by applicable law or agreed to in writing, software</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * See the License for the specific language governing permissions and</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * limitations under the License.</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * ========================================================= */</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Bridget makes jQuery widgets</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * v1.0.1</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * MIT license</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">root</span>, <span class="pl-smi">factory</span>) {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span>(<span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">define</span>.<span class="pl-smi">amd</span>) {</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">define</span>([<span class="pl-s"><span class="pl-pds">&quot;</span>jquery<span class="pl-pds">&quot;</span></span>], factory);</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-c1">module</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">module</span>.<span class="pl-smi">exports</span>) {</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> jQuery;</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">			jQuery <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>jquery<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">catch</span> (err) {</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">			jQuery <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-en">factory</span>(jQuery);</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">root</span>.<span class="pl-c1">S</span>lider <span class="pl-k">=</span> <span class="pl-en">factory</span>(<span class="pl-smi">root</span>.<span class="pl-smi">jQuery</span>);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">}(<span class="pl-v">this</span>, <span class="pl-k">function</span>(<span class="pl-smi">$</span>) {</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">// Reference to Slider constructor</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">var</span> Slider;</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">	(<span class="pl-k">function</span>( <span class="pl-smi">$</span> ) {</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// -------------------------- utils -------------------------- //</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> slice <span class="pl-k">=</span> <span class="pl-smi">Array</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">slice</span>;</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">noop</span>() {}</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">// -------------------------- definition -------------------------- //</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">defineBridget</span>( <span class="pl-smi">$</span> ) {</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// bail if no jQuery</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> ( <span class="pl-k">!</span>$ ) {</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// -------------------------- addOptionMethod -------------------------- //</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 * adds option method -&gt; $().plugin(&#39;option&#39;, {...})</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 * <span class="pl-k">@param</span> {Function} PluginClass - constructor class</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 */</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">function</span> <span class="pl-en">addOptionMethod</span>( <span class="pl-smi">PluginClass</span> ) {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// don&#39;t overwrite original option method</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> ( <span class="pl-smi">PluginClass</span>.<span class="pl-c1">prototype</span>.<span class="pl-smi">option</span> ) {</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">			  <span class="pl-c">// option setter</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">			  <span class="pl-c1">PluginClass</span>.<span class="pl-c1">prototype</span>.<span class="pl-en">option</span> <span class="pl-k">=</span> <span class="pl-k">function</span>( <span class="pl-smi">opts</span> ) {</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">			    <span class="pl-c">// bail out if not an object</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">			    <span class="pl-k">if</span> ( <span class="pl-k">!</span>$.<span class="pl-en">isPlainObject</span>( opts ) ){</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">			      <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">			    }</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">			    <span class="pl-smi">this</span>.<span class="pl-c1">options</span> <span class="pl-k">=</span> $.<span class="pl-en">extend</span>( <span class="pl-c1">true</span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>, opts );</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">			  };</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// -------------------------- plugin bridge -------------------------- //</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// helper function for logging errors</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// $.error breaks jQuery chaining</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> logError <span class="pl-k">=</span> <span class="pl-k">typeof</span> <span class="pl-en">console</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> noop <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">			  <span class="pl-k">function</span>( <span class="pl-smi">message</span> ) {</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">			    <span class="pl-en">console</span>.<span class="pl-c1">error</span>( message );</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">			  };</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 * jQuery plugin bridge, access methods like $elem.plugin(&#39;method&#39;)</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 * <span class="pl-k">@param</span> {String} namespace - plugin name</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 * <span class="pl-k">@param</span> {Function} PluginClass - constructor class</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 */</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">function</span> <span class="pl-en">bridge</span>( <span class="pl-smi">namespace</span>, <span class="pl-smi">PluginClass</span> ) {</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">			  <span class="pl-c">// add to jQuery fn namespace</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">			  $.<span class="pl-smi">fn</span>[ namespace ] <span class="pl-k">=</span> <span class="pl-k">function</span>( <span class="pl-smi">options</span> ) {</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">			    <span class="pl-k">if</span> ( <span class="pl-k">typeof</span> options <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">			      <span class="pl-c">// call plugin method when first argument is a string</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">			      <span class="pl-c">// get arguments for method</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">			      <span class="pl-k">var</span> args <span class="pl-k">=</span> <span class="pl-smi">slice</span>.<span class="pl-c1">call</span>( arguments, <span class="pl-c1">1</span> );</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">			      <span class="pl-k">for</span> ( <span class="pl-k">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>, len <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">length</span>; i <span class="pl-k">&lt;</span> len; i<span class="pl-k">++</span> ) {</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">var</span> elem <span class="pl-k">=</span> <span class="pl-v">this</span>[i];</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">var</span> instance <span class="pl-k">=</span> $.<span class="pl-c1">data</span>( elem, namespace );</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">if</span> ( <span class="pl-k">!</span>instance ) {</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">			          <span class="pl-en">logError</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>cannot call methods on <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> namespace <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> prior to initialization; <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">			            <span class="pl-s"><span class="pl-pds">&quot;</span>attempted to call &#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> options <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">			          <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">			        }</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">if</span> ( <span class="pl-k">!</span>$.<span class="pl-en">isFunction</span>( instance[options] ) <span class="pl-k">||</span> <span class="pl-smi">options</span>.<span class="pl-c1">charAt</span>(<span class="pl-c1">0</span>) <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>_<span class="pl-pds">&#39;</span></span> ) {</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">			          <span class="pl-en">logError</span>( <span class="pl-s"><span class="pl-pds">&quot;</span>no such method &#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> options <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39; for <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> namespace <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> instance<span class="pl-pds">&quot;</span></span> );</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">			          <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">			        }</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">			        <span class="pl-c">// trigger method with arguments</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">var</span> returnValue <span class="pl-k">=</span> instance[ options ].<span class="pl-c1">apply</span>( instance, args);</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">			        <span class="pl-c">// break look and return first value if provided</span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">if</span> ( returnValue <span class="pl-k">!==</span> <span class="pl-c1">undefined</span> <span class="pl-k">&amp;&amp;</span> returnValue <span class="pl-k">!==</span> instance) {</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">			          <span class="pl-k">return</span> returnValue;</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">			        }</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">			      }</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">			      <span class="pl-c">// return this if no return value</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">			      <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">			    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">			      <span class="pl-k">var</span> objects <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">map</span>( <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">var</span> instance <span class="pl-k">=</span> $.<span class="pl-c1">data</span>( <span class="pl-v">this</span>, namespace );</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">if</span> ( instance ) {</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">			          <span class="pl-c">// apply options &amp; init</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">			          <span class="pl-smi">instance</span>.<span class="pl-en">option</span>( options );</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">			          <span class="pl-smi">instance</span>.<span class="pl-en">_init</span>();</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">			        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">			          <span class="pl-c">// initialize new instance</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">			          instance <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">PluginClass</span>( <span class="pl-v">this</span>, options );</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">			          $.<span class="pl-c1">data</span>( <span class="pl-v">this</span>, namespace, instance );</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">			        }</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">return</span> $(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">			      });</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">			      <span class="pl-k">if</span>(<span class="pl-k">!</span>objects <span class="pl-k">||</span> <span class="pl-smi">objects</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">			      	<span class="pl-k">return</span> objects;</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">			      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">			      	<span class="pl-k">return</span> objects[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">			      }</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">			    }</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">			  };</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// -------------------------- bridget -------------------------- //</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/**</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 * converts a Prototypical class into a proper jQuery plugin</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 *   the class must have a ._init method</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 * <span class="pl-k">@param</span> {String} namespace - plugin name, used in $().pluginName</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 * <span class="pl-k">@param</span> {Function} PluginClass - constructor class</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			 */</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">$</span>.<span class="pl-en">bridget</span> <span class="pl-k">=</span> <span class="pl-k">function</span>( <span class="pl-smi">namespace</span>, <span class="pl-smi">PluginClass</span> ) {</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">			  <span class="pl-en">addOptionMethod</span>( PluginClass );</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">			  <span class="pl-en">bridge</span>( namespace, PluginClass );</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> $.<span class="pl-smi">bridget</span>;</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">	  	<span class="pl-c">// get jquery from browser global</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">	  	<span class="pl-en">defineBridget</span>( $ );</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">	})( $ );</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">	<span class="pl-c">/*************************************************</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			BOOTSTRAP-SLIDER SOURCE CODE</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line"><span class="pl-c">	**************************************************/</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">	(<span class="pl-k">function</span>(<span class="pl-smi">$</span>) {</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> ErrorMsgs <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">formatInvalidInputErrorMsg</span> <span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">input</span>) {</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Invalid input value &#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> input <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39; passed in<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">			callingContextNotSliderInstance <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">var</span> SliderScale <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">			linear<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">toValue</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">percentage</span>) {</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> rawValue <span class="pl-k">=</span> percentage<span class="pl-k">/</span><span class="pl-c1">100</span> <span class="pl-k">*</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span> <span class="pl-k">-</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>);</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_positions</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> minv, maxv, minp, maxp <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_positions</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> (percentage <span class="pl-k">&lt;=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_positions</span>[i]) {</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">								minv <span class="pl-k">=</span> (i <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) <span class="pl-k">?</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>[i<span class="pl-k">-</span><span class="pl-c1">1</span>] <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">								minp <span class="pl-k">=</span> (i <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) <span class="pl-k">?</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_positions</span>[i<span class="pl-k">-</span><span class="pl-c1">1</span>] <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">								maxv <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>[i];</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">								maxp <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_positions</span>[i];</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (i <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">var</span> partialPercentage <span class="pl-k">=</span> (percentage <span class="pl-k">-</span> minp) <span class="pl-k">/</span> (maxp <span class="pl-k">-</span> minp);</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">							rawValue <span class="pl-k">=</span> minv <span class="pl-k">+</span> partialPercentage <span class="pl-k">*</span> (maxv <span class="pl-k">-</span> minv);</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> value <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span> <span class="pl-k">+</span> <span class="pl-smi">Math</span>.<span class="pl-c1">round</span>(rawValue <span class="pl-k">/</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">step</span>) <span class="pl-k">*</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">step</span>;</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (value <span class="pl-k">&lt;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>) {</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>;</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> (value <span class="pl-k">&gt;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>) {</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>;</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> value;</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">toPercentage</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span> <span class="pl-k">===</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>) {</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_positions</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> minv, maxv, minp, maxp <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> (value  <span class="pl-k">&lt;=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>[i]) {</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">								minv <span class="pl-k">=</span> (i <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) <span class="pl-k">?</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>[i<span class="pl-k">-</span><span class="pl-c1">1</span>] <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">								minp <span class="pl-k">=</span> (i <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) <span class="pl-k">?</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_positions</span>[i<span class="pl-k">-</span><span class="pl-c1">1</span>] <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">								maxv <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>[i];</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">								maxp <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_positions</span>[i];</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (i <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">var</span> partialPercentage <span class="pl-k">=</span> (value <span class="pl-k">-</span> minv) <span class="pl-k">/</span> (maxv <span class="pl-k">-</span> minv);</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">return</span> minp <span class="pl-k">+</span> partialPercentage <span class="pl-k">*</span> (maxp <span class="pl-k">-</span> minp);</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">100</span> <span class="pl-k">*</span> (value <span class="pl-k">-</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>) <span class="pl-k">/</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span> <span class="pl-k">-</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>);</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">			logarithmic<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">/* Based on http://stackoverflow.com/questions/846221/logarithmic-slider */</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">toValue</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">percentage</span>) {</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> min <span class="pl-k">=</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-smi">Math</span>.<span class="pl-c1">log</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>);</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> max <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">log</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>);</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> value <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">exp</span>(min <span class="pl-k">+</span> (max <span class="pl-k">-</span> min) <span class="pl-k">*</span> percentage <span class="pl-k">/</span> <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">					value <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span> <span class="pl-k">+</span> <span class="pl-smi">Math</span>.<span class="pl-c1">round</span>((value <span class="pl-k">-</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>) <span class="pl-k">/</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">step</span>) <span class="pl-k">*</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">step</span>;</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">/* Rounding to the nearest step could exceed the min or</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line"><span class="pl-c">					 * max, so clip to those values. */</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (value <span class="pl-k">&lt;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>) {</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>;</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> (value <span class="pl-k">&gt;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>) {</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>;</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> value;</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">toPercentage</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span> <span class="pl-k">===</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>) {</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> max <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">log</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>);</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> min <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span> <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-smi">Math</span>.<span class="pl-c1">log</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>);</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> v <span class="pl-k">=</span> value <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-smi">Math</span>.<span class="pl-c1">log</span>(value);</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> <span class="pl-c1">100</span> <span class="pl-k">*</span> (v <span class="pl-k">-</span> min) <span class="pl-k">/</span> (max <span class="pl-k">-</span> min);</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*************************************************</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line"><span class="pl-c">							CONSTRUCTOR</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		**************************************************/</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">Slider</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">createNewSlider</span>.<span class="pl-c1">call</span>(<span class="pl-v">this</span>, element, options);</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">function</span> <span class="pl-en">createNewSlider</span>(<span class="pl-smi">element</span>, <span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line"><span class="pl-c">				The internal state object is used to store data about the current &#39;state&#39; of slider.</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line"><span class="pl-c">				This includes values such as the `value`, `enabled`, etc...</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			*/</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">_state</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">				value<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">				enabled<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">				offset<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">				size<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">				percentage<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">				inDrag<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">				over<span class="pl-k">:</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-k">typeof</span> element <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">element</span> <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-en">querySelector</span>(element);</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> <span class="pl-k">if</span>(element <span class="pl-k">instanceof</span> HTMLElement) {</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">element</span> <span class="pl-k">=</span> element;</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/*************************************************</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line"><span class="pl-c">							Process Options</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			**************************************************/</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">			options <span class="pl-k">=</span> options <span class="pl-k">?</span> options <span class="pl-k">:</span> {};</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> optionTypes <span class="pl-k">=</span> <span class="pl-smi">Object</span>.<span class="pl-en">keys</span>(<span class="pl-smi">this</span>.<span class="pl-smi">defaultOptions</span>);</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">optionTypes</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> optName <span class="pl-k">=</span> optionTypes[i];</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// First check if an option was passed in via the constructor</span></td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> val <span class="pl-k">=</span> options[optName];</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// If no data attrib, then check data atrributes</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">=</span> (<span class="pl-k">typeof</span> val <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> val <span class="pl-k">:</span> <span class="pl-en">getDataAttrib</span>(<span class="pl-smi">this</span>.<span class="pl-smi">element</span>, optName);</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Finally, if nothing was specified, use the defaults</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">=</span> (val <span class="pl-k">!==</span> <span class="pl-c1">null</span>) <span class="pl-k">?</span> val <span class="pl-k">:</span> <span class="pl-smi">this</span>.<span class="pl-smi">defaultOptions</span>[optName];</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Set all options on the instance of the Slider</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">this</span>.<span class="pl-c1">options</span>) {</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-c1">options</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-c1">options</span>[optName] <span class="pl-k">=</span> val;</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line"><span class="pl-c">				Validate `tooltip_position` against &#39;orientation`</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line"><span class="pl-c">				- if `tooltip_position` is incompatible with orientation, swith it to a default compatible with specified `orientation`</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line"><span class="pl-c">					-- default for &quot;vertical&quot; -&gt; &quot;right&quot;</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line"><span class="pl-c">					-- default for &quot;horizontal&quot; -&gt; &quot;left&quot;</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			*/</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>vertical<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">tooltip_position</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">tooltip_position</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>bottom<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">tooltip_position</span>	<span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>right<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>horizontal<span class="pl-pds">&quot;</span></span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">tooltip_position</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span> <span class="pl-k">||</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">tooltip_position</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>right<span class="pl-pds">&quot;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">tooltip_position</span>	<span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">function</span> <span class="pl-en">getDataAttrib</span>(<span class="pl-smi">element</span>, <span class="pl-smi">optName</span>) {</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> dataName <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>data-slider-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">optName</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>_<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>-<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> dataValString <span class="pl-k">=</span> <span class="pl-smi">element</span>.<span class="pl-c1">getAttribute</span>(dataName);</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">JSON</span>.<span class="pl-c1">parse</span>(dataValString);</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">catch</span>(err) {</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> dataValString;</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/*************************************************</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line"><span class="pl-c">							Create Markup</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			**************************************************/</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> origWidth <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">style</span>.<span class="pl-c1">width</span>;</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> updateSlider <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> parent <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">parentNode</span>;</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> sliderTrackSelection;</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> sliderTrackLow, sliderTrackHigh;</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> sliderMinHandle;</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> sliderMaxHandle;</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>) {</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">				updateSlider <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">/* Create elements needed for slider */</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span> <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>slider<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">/* Create slider track elements */</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> sliderTrack <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTrack</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>slider-track<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">				sliderTrackLow <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTrackLow</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>slider-track-low<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">				sliderTrackSelection <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTrackSelection</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>slider-selection<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">				sliderTrackHigh <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTrackHigh</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>slider-track-high<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">				sliderMinHandle <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderMinHandle</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>slider-handle min-slider-handle<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderMinHandle</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>slider<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderMinHandle</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-valuemin<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>);</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderMinHandle</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-valuemax<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>);</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">				sliderMaxHandle <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderMaxHandle</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>slider-handle max-slider-handle<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderMaxHandle</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>slider<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderMaxHandle</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-valuemin<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>);</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderMaxHandle</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-valuemax<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>);</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTrack</span>.<span class="pl-c1">appendChild</span>(sliderTrackLow);</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTrack</span>.<span class="pl-c1">appendChild</span>(sliderTrackSelection);</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTrack</span>.<span class="pl-c1">appendChild</span>(sliderTrackHigh);</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">/* Add aria-labelledby to handle&#39;s */</span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> isLabelledbyArray <span class="pl-k">=</span> <span class="pl-smi">Array</span>.<span class="pl-en">isArray</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">labelledby</span>);</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (isLabelledbyArray <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">labelledby</span>[<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">sliderMinHandle</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-labelledby<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">labelledby</span>[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (isLabelledbyArray <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">labelledby</span>[<span class="pl-c1">1</span>]) {</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">sliderMaxHandle</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-labelledby<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">labelledby</span>[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>isLabelledbyArray <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">labelledby</span>) {</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">sliderMinHandle</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-labelledby<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">labelledby</span>);</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">sliderMaxHandle</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-labelledby<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">labelledby</span>);</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">/* Create ticks */</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">ticks</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">Array</span>.<span class="pl-en">isArray</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> tick <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">tick</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>slider-tick<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-smi">ticks</span>.<span class="pl-c1">push</span>(tick);</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">sliderTrack</span>.<span class="pl-c1">appendChild</span>(tick);</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">sliderTrackSelection</span>.<span class="pl-c1">className</span> <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> tick-slider-selection<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTrack</span>.<span class="pl-c1">appendChild</span>(sliderMinHandle);</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTrack</span>.<span class="pl-c1">appendChild</span>(sliderMaxHandle);</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">tickLabels</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">Array</span>.<span class="pl-en">isArray</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_labels</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_labels</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">tickLabelContainer</span> <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">tickLabelContainer</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>slider-tick-label-container<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_labels</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> label <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> noTickPositionsSpecified <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_positions</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> tickLabelsIndex <span class="pl-k">=</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">reversed</span> <span class="pl-k">&amp;&amp;</span> noTickPositionsSpecified) <span class="pl-k">?</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_labels</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> (i <span class="pl-k">+</span> <span class="pl-c1">1</span>)) <span class="pl-k">:</span> i;</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">label</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>slider-tick-label<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">label</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_labels</span>[tickLabelsIndex];</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-smi">tickLabels</span>.<span class="pl-c1">push</span>(label);</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-smi">tickLabelContainer</span>.<span class="pl-c1">appendChild</span>(label);</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> <span class="pl-en">createAndAppendTooltipSubElements</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">tooltipElem</span>) {</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> arrow <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">arrow</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>tooltip-arrow<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> inner <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">inner</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>tooltip-inner<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">tooltipElem</span>.<span class="pl-c1">appendChild</span>(arrow);</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">tooltipElem</span>.<span class="pl-c1">appendChild</span>(inner);</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">/* Create tooltip elements */</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> sliderTooltip <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTooltip</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>tooltip tooltip-main<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTooltip</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>presentation<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">createAndAppendTooltipSubElements</span>(sliderTooltip);</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> sliderTooltipMin <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTooltipMin</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>tooltip tooltip-min<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTooltipMin</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>presentation<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">createAndAppendTooltipSubElements</span>(sliderTooltipMin);</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> sliderTooltipMax <span class="pl-k">=</span> <span class="pl-smi">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTooltipMax</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>tooltip tooltip-max<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">sliderTooltipMax</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>role<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>presentation<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">createAndAppendTooltipSubElements</span>(sliderTooltipMax);</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">/* Append components to sliderElem */</span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-c1">appendChild</span>(sliderTrack);</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-c1">appendChild</span>(sliderTooltip);</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-c1">appendChild</span>(sliderTooltipMin);</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-c1">appendChild</span>(sliderTooltipMax);</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">tickLabelContainer</span>) {</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-c1">appendChild</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tickLabelContainer</span>);</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">/* Append slider element to parent container, right before the original &lt;input&gt; element */</span></td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">parent</span>.<span class="pl-c1">insertBefore</span>(<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>, <span class="pl-smi">this</span>.<span class="pl-smi">element</span>);</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">/* Hide original &lt;input&gt; element */</span></td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>none<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/* If JQuery exists, cache JQ references */</span></td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>($) {</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.$element <span class="pl-k">=</span> $(<span class="pl-smi">this</span>.<span class="pl-smi">element</span>);</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.$sliderElem <span class="pl-k">=</span> $(<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>);</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/*************************************************</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line"><span class="pl-c">								Setup</span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			**************************************************/</span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">eventToCallbackMap</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-c1">id</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">id</span>;</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">touchCapable</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ontouchstart<span class="pl-pds">&#39;</span></span> <span class="pl-k">in</span> <span class="pl-c1">window</span> <span class="pl-k">||</span> (<span class="pl-smi">window</span>.<span class="pl-c1">D</span>ocumentTouch <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">document</span> <span class="pl-k">instanceof</span> <span class="pl-smi">window</span>.<span class="pl-c1">D</span>ocumentTouch);</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-en">querySelector</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.tooltip-main<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">tooltipInner</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>.<span class="pl-en">querySelector</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.tooltip-inner<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-en">querySelector</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.tooltip-min<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">tooltipInner_min</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>.<span class="pl-en">querySelector</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.tooltip-inner<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-en">querySelector</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.tooltip-max<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">tooltipInner_max</span><span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>.<span class="pl-en">querySelector</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.tooltip-inner<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (SliderScale[<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">scale</span>]) {</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">scale</span> <span class="pl-k">=</span> SliderScale[<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">scale</span>];</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (updateSlider <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Reset classes</span></td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>slider-horizontal<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>slider-vertical<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Undo existing inline styles for track</span></td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">				[<span class="pl-s"><span class="pl-pds">&quot;</span>left<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>top<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>width<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>height<span class="pl-pds">&quot;</span></span>].<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">prop</span>) {</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeProperty</span>(<span class="pl-smi">this</span>.<span class="pl-smi">trackLow</span>, prop);</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeProperty</span>(<span class="pl-smi">this</span>.<span class="pl-smi">trackSelection</span>, prop);</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeProperty</span>(<span class="pl-smi">this</span>.<span class="pl-smi">trackHigh</span>, prop);</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">				}, <span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Undo inline styles on handles</span></td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">				[<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>, <span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>].<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">handle</span>) {</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeProperty</span>(handle, <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeProperty</span>(handle, <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">				}, <span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Undo inline styles and classes on tooltips</span></td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">				[<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>, <span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>, <span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>].<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">tooltip</span>) {</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeProperty</span>(tooltip, <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeProperty</span>(tooltip, <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeProperty</span>(tooltip, <span class="pl-s"><span class="pl-pds">&#39;</span>margin-left<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeProperty</span>(tooltip, <span class="pl-s"><span class="pl-pds">&#39;</span>margin-top<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(tooltip, <span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(tooltip, <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">				}, <span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>,<span class="pl-s"><span class="pl-pds">&#39;</span>slider-vertical<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">stylePos</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">mousePos</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>pageY<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sizePos</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>offsetHeight<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>slider-horizontal<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> origWidth;</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>horizontal<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">stylePos</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">mousePos</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>pageX<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sizePos</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>offsetWidth<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-en">_setTooltipPosition</span>();</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/* In case ticks are specified, overwrite the min and max bounds */</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">Array</span>.<span class="pl-en">isArray</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span> <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-smi">max</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">Math</span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>);</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span> <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-smi">min</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">Math</span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>);</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">Array</span>.<span class="pl-en">isArray</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">value</span>)) {</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">range</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">range</span>) {</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// User wants a range, but value is not an array</span></td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> [<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">value</span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>];</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">trackLow</span> <span class="pl-k">=</span> sliderTrackLow <span class="pl-k">||</span> <span class="pl-smi">this</span>.<span class="pl-smi">trackLow</span>;</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">trackSelection</span> <span class="pl-k">=</span> sliderTrackSelection <span class="pl-k">||</span> <span class="pl-smi">this</span>.<span class="pl-smi">trackSelection</span>;</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">trackHigh</span> <span class="pl-k">=</span> sliderTrackHigh <span class="pl-k">||</span> <span class="pl-smi">this</span>.<span class="pl-smi">trackHigh</span>;</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">selection</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">trackLow</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">trackSelection</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">trackHigh</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span> <span class="pl-k">=</span> sliderMinHandle <span class="pl-k">||</span> <span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>;</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span> <span class="pl-k">=</span> sliderMaxHandle <span class="pl-k">||</span> <span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>;</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (updateSlider <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Reset classes</span></td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>round triangle<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>round triangle hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">this</span>.<span class="pl-smi">ticks</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">ticks</span>[i], <span class="pl-s"><span class="pl-pds">&#39;</span>round triangle hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> availableHandleModifiers <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&#39;</span>round<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>triangle<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>custom<span class="pl-pds">&#39;</span></span>];</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> isValidHandleType <span class="pl-k">=</span> <span class="pl-smi">availableHandleModifiers</span>.<span class="pl-c1">indexOf</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">handle</span>) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (isValidHandleType) {</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">handle</span>);</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">handle</span>);</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">this</span>.<span class="pl-smi">ticks</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">ticks</span>[i], <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">handle</span>);</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">offset</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_offset</span>(<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>);</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">size</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>[<span class="pl-smi">this</span>.<span class="pl-smi">sizePos</span>];</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-en">setValue</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>);</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/******************************************</span></td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line"><span class="pl-c">						Bind Event Listeners</span></td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			******************************************/</span></td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Bind keyboard handlers</span></td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">handle1Keydown</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">_keydown</span>.<span class="pl-en">bind</span>(<span class="pl-v">this</span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>keydown<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">handle1Keydown</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">handle2Keydown</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">_keydown</span>.<span class="pl-en">bind</span>(<span class="pl-v">this</span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>keydown<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">handle2Keydown</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">mousedown</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">_mousedown</span>.<span class="pl-en">bind</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">touchCapable</span>) {</td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Bind touch handlers</span></td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>touchstart<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mousedown</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mousedown<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mousedown</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">// Bind tooltip-related handlers</span></td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">tooltip</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">tooltip</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>always<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_showTooltip</span>();</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_alwaysShowTooltip</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">showTooltip</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">_showTooltip</span>.<span class="pl-en">bind</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">hideTooltip</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">_hideTooltip</span>.<span class="pl-en">bind</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mouseenter<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">showTooltip</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mouseleave<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">hideTooltip</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>focus<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">showTooltip</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>blur<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">hideTooltip</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>focus<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">showTooltip</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>blur<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">hideTooltip</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">enabled</span>) {</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">enable</span>();</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">			} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">disable</span>();</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*************************************************</span></td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line"><span class="pl-c">					INSTANCE PROPERTIES/METHODS</span></td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		- Any methods bound to the prototype are considered</span></td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		part of the plugin&#39;s `public` interface</span></td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		**************************************************/</span></td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">Slider</span>.<span class="pl-c1">prototype</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_init</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {}, <span class="pl-c">// NOTE: Must exist to support bridget</span></td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line">			constructor<span class="pl-k">:</span> Slider,</td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line">			defaultOptions<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line">				id<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line">			  min<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">				max<span class="pl-k">:</span> <span class="pl-c1">10</span>,</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">				step<span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">				precision<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">				orientation<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>horizontal<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">				value<span class="pl-k">:</span> <span class="pl-c1">5</span>,</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">				range<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">				selection<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>before<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">				tooltip<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">				tooltip_split<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">				handle<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>round<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">				reversed<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">				enabled<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">formatter</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">val</span>) {</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">Array</span>.<span class="pl-en">isArray</span>(val)) {</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> val[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> : <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> val[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> val;</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">				},</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">				natural_arrow_keys<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">				ticks<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line">				ticks_positions<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line">				ticks_labels<span class="pl-k">:</span> [],</td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line">				ticks_snap_bounds<span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line">				scale<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>linear<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line">				focus<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line">				tooltip_position<span class="pl-k">:</span> <span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line">				labelledby<span class="pl-k">:</span> <span class="pl-c1">null</span></td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">getElement</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>;</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">getValue</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">range</span>) {</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>;</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">setValue</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">val</span>, <span class="pl-smi">triggerSlideEvent</span>, <span class="pl-smi">triggerChangeEvent</span>) {</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>val) {</td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">					val <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> oldValue <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">getValue</span>();</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_validateInputValue</span>(val);</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> applyPrecision <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">_applyPrecision</span>.<span class="pl-en">bind</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">range</span>) {</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">0</span>] <span class="pl-k">=</span> <span class="pl-en">applyPrecision</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-en">applyPrecision</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">0</span>] <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">max</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>, <span class="pl-smi">Math</span>.<span class="pl-c1">min</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>, <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">0</span>]));</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">max</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>, <span class="pl-smi">Math</span>.<span class="pl-c1">min</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>, <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">1</span>]));</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> <span class="pl-en">applyPrecision</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>);</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> [ <span class="pl-smi">Math</span>.<span class="pl-c1">max</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>, <span class="pl-smi">Math</span>.<span class="pl-c1">min</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>, <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>))];</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>hide<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">selection</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>after<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>;</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>;</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span> <span class="pl-k">&gt;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>) {</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span> <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_toPercentage</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">0</span>]),</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_toPercentage</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">1</span>]),</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">step</span> <span class="pl-k">*</span> <span class="pl-c1">100</span> <span class="pl-k">/</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span> <span class="pl-k">-</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>)</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line">					];</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span> <span class="pl-k">=</span> [<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-c1">100</span>];</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_layout</span>();</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> newValue <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">range</span> <span class="pl-k">?</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span> <span class="pl-k">:</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(triggerSlideEvent <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slide<span class="pl-pds">&#39;</span></span>, newValue);</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>( (oldValue <span class="pl-k">!==</span> newValue) <span class="pl-k">&amp;&amp;</span> (triggerChangeEvent <span class="pl-k">===</span> <span class="pl-c1">true</span>) ) {</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>change<span class="pl-pds">&#39;</span></span>, {</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">						oldValue<span class="pl-k">:</span> oldValue,</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">						newValue<span class="pl-k">:</span> newValue</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">					});</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_setDataVal</span>(newValue);</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">destroy</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Remove event handlers on slider elements</span></td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_removeSliderEventHandlers</span>();</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Remove the slider from the DOM</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-c1">parentNode</span>.<span class="pl-en">removeChild</span>(<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>);</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">/* Show original &lt;input&gt; element */</span></td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Clear out custom event bindings</span></td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_cleanUpEventCallbacksMap</span>();</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Remove data values</span></td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">element</span>.<span class="pl-en">removeAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Remove JQuery handlers/data</span></td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>($) {</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_unbindJQueryEventHandlers</span>();</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.$<span class="pl-smi">element</span>.<span class="pl-en">removeData</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slider<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">disable</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">enabled</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>.<span class="pl-en">removeAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>tabindex<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>.<span class="pl-en">removeAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>tabindex<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>slider-disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slideDisabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">enable</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">enabled</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>tabindex<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>tabindex<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>slider-disabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slideEnabled<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">toggle</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">enabled</span>) {</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">disable</span>();</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">enable</span>();</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">isEnabled</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">enabled</span>;</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">on</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">evt</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_bindNonQueryEventHandler</span>(evt, callback);</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">off</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">evt</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>($) {</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">this</span>.$<span class="pl-smi">element</span>.<span class="pl-en">off</span>(evt, callback);</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">this</span>.$<span class="pl-smi">sliderElem</span>.<span class="pl-en">off</span>(evt, callback);</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line">              <span class="pl-smi">this</span>.<span class="pl-en">_unbindNonQueryEventHandler</span>(evt, callback);</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">getAttribute</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">attribute</span>) {</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(attribute) {</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>[attribute];</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>;</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">setAttribute</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">attribute</span>, <span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-c1">options</span>[attribute] <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">refresh</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_removeSliderEventHandlers</span>();</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">createNewSlider</span>.<span class="pl-c1">call</span>(<span class="pl-v">this</span>, <span class="pl-smi">this</span>.<span class="pl-smi">element</span>, <span class="pl-smi">this</span>.<span class="pl-c1">options</span>);</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>($) {</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// Bind new instance of slider to the element</span></td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">					$.<span class="pl-c1">data</span>(<span class="pl-smi">this</span>.<span class="pl-smi">element</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>slider<span class="pl-pds">&#39;</span></span>, <span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">relayout</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_layout</span>();</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/******************************+</span></td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line"><span class="pl-c">						HELPERS</span></td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			- Any method that is not part of the public interface.</span></td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			- Place it underneath this comment block and write its signature like so:</span></td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			  					_fnName : function() {...}</span></td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			********************************/</span></td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_removeSliderEventHandlers</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Remove keydown event listeners</span></td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>keydown<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">handle1Keydown</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>keydown<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">handle2Keydown</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">showTooltip</span>) {</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>focus<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">showTooltip</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>focus<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">showTooltip</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">hideTooltip</span>) {</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>blur<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">hideTooltip</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>blur<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">hideTooltip</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Remove event listeners from sliderElem</span></td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">showTooltip</span>) {</td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mouseenter<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">showTooltip</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">hideTooltip</span>) {</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mouseleave<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">hideTooltip</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>touchstart<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mousedown</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mousedown<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mousedown</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_bindNonQueryEventHandler</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">evt</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-smi">eventToCallbackMap</span>[evt] <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">eventToCallbackMap</span>[evt] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">eventToCallbackMap</span>[evt].<span class="pl-c1">push</span>(callback);</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">_unbindNonQueryEventHandler</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">evt</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> callbacks <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">eventToCallbackMap</span>[evt];</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">if</span>(callbacks <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">              <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">callbacks</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">                  <span class="pl-k">if</span> (callbacks[i] <span class="pl-k">===</span> callback) {</td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">                      <span class="pl-smi">callbacks</span>.<span class="pl-c1">splice</span>(i, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">                      <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_cleanUpEventCallbacksMap</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> eventNames <span class="pl-k">=</span> <span class="pl-smi">Object</span>.<span class="pl-en">keys</span>(<span class="pl-smi">this</span>.<span class="pl-smi">eventToCallbackMap</span>);</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">eventNames</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> eventName <span class="pl-k">=</span> eventNames[i];</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">eventToCallbackMap</span>[eventName] <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_showTooltip</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">tooltip_split</span> <span class="pl-k">===</span> <span class="pl-c1">false</span> ){</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line">        	<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line">        	<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line">        	<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line">		    } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>.<span class="pl-c1">style</span>.<span class="pl-c1">display</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>none<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">		    }</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">over</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_hideTooltip</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">inDrag</span> <span class="pl-k">===</span> <span class="pl-c1">false</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">this</span>.<span class="pl-smi">alwaysShowTooltip</span> <span class="pl-k">!==</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">over</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_layout</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> positionPercentages;</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">reversed</span>) {</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">					positionPercentages <span class="pl-k">=</span> [ <span class="pl-c1">100</span> <span class="pl-k">-</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">0</span>], <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">range</span> <span class="pl-k">?</span> <span class="pl-c1">100</span> <span class="pl-k">-</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">1</span>] <span class="pl-k">:</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">1</span>]];</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">					positionPercentages <span class="pl-k">=</span> [ <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">0</span>], <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">1</span>] ];</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>.<span class="pl-c1">style</span>[<span class="pl-smi">this</span>.<span class="pl-smi">stylePos</span>] <span class="pl-k">=</span> positionPercentages[<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-valuenow<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>.<span class="pl-c1">style</span>[<span class="pl-smi">this</span>.<span class="pl-smi">stylePos</span>] <span class="pl-k">=</span> positionPercentages[<span class="pl-c1">1</span>]<span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>aria-valuenow<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">/* Position ticks and labels */</span></td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">Array</span>.<span class="pl-en">isArray</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> styleSize <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>height<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>width<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> styleMargin <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>marginTop<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>marginLeft<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> labelSize <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">size</span> <span class="pl-k">/</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">tickLabelContainer</span>) {</td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> extraMargin <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_positions</span>.<span class="pl-c1">length</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">this</span>.<span class="pl-smi">tickLabelContainer</span>.<span class="pl-c1">style</span>[styleMargin] <span class="pl-k">=</span> <span class="pl-k">-</span>labelSize<span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1030" class="blob-num js-line-number" data-line-number="1030"></td>
        <td id="LC1030" class="blob-code blob-code-inner js-file-line">							extraMargin <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">tickLabelContainer</span>.<span class="pl-smi">offsetHeight</span>;</td>
      </tr>
      <tr>
        <td id="L1031" class="blob-num js-line-number" data-line-number="1031"></td>
        <td id="LC1031" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1032" class="blob-num js-line-number" data-line-number="1032"></td>
        <td id="LC1032" class="blob-code blob-code-inner js-file-line">							<span class="pl-c">/* Chidren are position absolute, calculate height by finding the max offsetHeight of a child */</span></td>
      </tr>
      <tr>
        <td id="L1033" class="blob-num js-line-number" data-line-number="1033"></td>
        <td id="LC1033" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span> ; i <span class="pl-k">&lt;</span> <span class="pl-smi">this</span>.<span class="pl-smi">tickLabelContainer</span>.<span class="pl-c1">childNodes</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1034" class="blob-num js-line-number" data-line-number="1034"></td>
        <td id="LC1034" class="blob-code blob-code-inner js-file-line">								<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">tickLabelContainer</span>.<span class="pl-c1">childNodes</span>[i].<span class="pl-smi">offsetHeight</span> <span class="pl-k">&gt;</span> extraMargin) {</td>
      </tr>
      <tr>
        <td id="L1035" class="blob-num js-line-number" data-line-number="1035"></td>
        <td id="LC1035" class="blob-code blob-code-inner js-file-line">									extraMargin <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">tickLabelContainer</span>.<span class="pl-c1">childNodes</span>[i].<span class="pl-smi">offsetHeight</span>;</td>
      </tr>
      <tr>
        <td id="L1036" class="blob-num js-line-number" data-line-number="1036"></td>
        <td id="LC1036" class="blob-code blob-code-inner js-file-line">								}</td>
      </tr>
      <tr>
        <td id="L1037" class="blob-num js-line-number" data-line-number="1037"></td>
        <td id="LC1037" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L1038" class="blob-num js-line-number" data-line-number="1038"></td>
        <td id="LC1038" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1039" class="blob-num js-line-number" data-line-number="1039"></td>
        <td id="LC1039" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>horizontal<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1040" class="blob-num js-line-number" data-line-number="1040"></td>
        <td id="LC1040" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-c1">style</span>.<span class="pl-c1">marginBottom</span> <span class="pl-k">=</span> extraMargin <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1041" class="blob-num js-line-number" data-line-number="1041"></td>
        <td id="LC1041" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1042" class="blob-num js-line-number" data-line-number="1042"></td>
        <td id="LC1042" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1043" class="blob-num js-line-number" data-line-number="1043"></td>
        <td id="LC1043" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1044" class="blob-num js-line-number" data-line-number="1044"></td>
        <td id="LC1044" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1045" class="blob-num js-line-number" data-line-number="1045"></td>
        <td id="LC1045" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> percentage <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_positions</span>[i] <span class="pl-k">||</span> <span class="pl-smi">this</span>.<span class="pl-en">_toPercentage</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>[i]);</td>
      </tr>
      <tr>
        <td id="L1046" class="blob-num js-line-number" data-line-number="1046"></td>
        <td id="LC1046" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1047" class="blob-num js-line-number" data-line-number="1047"></td>
        <td id="LC1047" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">reversed</span>) {</td>
      </tr>
      <tr>
        <td id="L1048" class="blob-num js-line-number" data-line-number="1048"></td>
        <td id="LC1048" class="blob-code blob-code-inner js-file-line">							percentage <span class="pl-k">=</span> <span class="pl-c1">100</span> <span class="pl-k">-</span> percentage;</td>
      </tr>
      <tr>
        <td id="L1049" class="blob-num js-line-number" data-line-number="1049"></td>
        <td id="LC1049" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1050" class="blob-num js-line-number" data-line-number="1050"></td>
        <td id="LC1050" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1051" class="blob-num js-line-number" data-line-number="1051"></td>
        <td id="LC1051" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-smi">ticks</span>[i].<span class="pl-c1">style</span>[<span class="pl-smi">this</span>.<span class="pl-smi">stylePos</span>] <span class="pl-k">=</span> percentage <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1052" class="blob-num js-line-number" data-line-number="1052"></td>
        <td id="LC1052" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1053" class="blob-num js-line-number" data-line-number="1053"></td>
        <td id="LC1053" class="blob-code blob-code-inner js-file-line">						<span class="pl-c">/* Set class labels to denote whether ticks are in the selection */</span></td>
      </tr>
      <tr>
        <td id="L1054" class="blob-num js-line-number" data-line-number="1054"></td>
        <td id="LC1054" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">ticks</span>[i], <span class="pl-s"><span class="pl-pds">&#39;</span>in-selection<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1055" class="blob-num js-line-number" data-line-number="1055"></td>
        <td id="LC1055" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">range</span>) {</td>
      </tr>
      <tr>
        <td id="L1056" class="blob-num js-line-number" data-line-number="1056"></td>
        <td id="LC1056" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">selection</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>after<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> percentage <span class="pl-k">&gt;=</span> positionPercentages[<span class="pl-c1">0</span>]){</td>
      </tr>
      <tr>
        <td id="L1057" class="blob-num js-line-number" data-line-number="1057"></td>
        <td id="LC1057" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">ticks</span>[i], <span class="pl-s"><span class="pl-pds">&#39;</span>in-selection<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1058" class="blob-num js-line-number" data-line-number="1058"></td>
        <td id="LC1058" class="blob-code blob-code-inner js-file-line">							} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-c1">selection</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>before<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> percentage <span class="pl-k">&lt;=</span> positionPercentages[<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L1059" class="blob-num js-line-number" data-line-number="1059"></td>
        <td id="LC1059" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">ticks</span>[i], <span class="pl-s"><span class="pl-pds">&#39;</span>in-selection<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1060" class="blob-num js-line-number" data-line-number="1060"></td>
        <td id="LC1060" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L1061" class="blob-num js-line-number" data-line-number="1061"></td>
        <td id="LC1061" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">else</span> <span class="pl-k">if</span> (percentage <span class="pl-k">&gt;=</span> positionPercentages[<span class="pl-c1">0</span>] <span class="pl-k">&amp;&amp;</span> percentage <span class="pl-k">&lt;=</span> positionPercentages[<span class="pl-c1">1</span>]) {</td>
      </tr>
      <tr>
        <td id="L1062" class="blob-num js-line-number" data-line-number="1062"></td>
        <td id="LC1062" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">ticks</span>[i], <span class="pl-s"><span class="pl-pds">&#39;</span>in-selection<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1063" class="blob-num js-line-number" data-line-number="1063"></td>
        <td id="LC1063" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1064" class="blob-num js-line-number" data-line-number="1064"></td>
        <td id="LC1064" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1065" class="blob-num js-line-number" data-line-number="1065"></td>
        <td id="LC1065" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">tickLabels</span>[i]) {</td>
      </tr>
      <tr>
        <td id="L1066" class="blob-num js-line-number" data-line-number="1066"></td>
        <td id="LC1066" class="blob-code blob-code-inner js-file-line">							<span class="pl-smi">this</span>.<span class="pl-smi">tickLabels</span>[i].<span class="pl-c1">style</span>[styleSize] <span class="pl-k">=</span> labelSize <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1067" class="blob-num js-line-number" data-line-number="1067"></td>
        <td id="LC1067" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1068" class="blob-num js-line-number" data-line-number="1068"></td>
        <td id="LC1068" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_positions</span>[i] <span class="pl-k">!==</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L1069" class="blob-num js-line-number" data-line-number="1069"></td>
        <td id="LC1069" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">this</span>.<span class="pl-smi">tickLabels</span>[i].<span class="pl-c1">style</span>.<span class="pl-smi">position</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>absolute<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1070" class="blob-num js-line-number" data-line-number="1070"></td>
        <td id="LC1070" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">this</span>.<span class="pl-smi">tickLabels</span>[i].<span class="pl-c1">style</span>[<span class="pl-smi">this</span>.<span class="pl-smi">stylePos</span>] <span class="pl-k">=</span> percentage <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1071" class="blob-num js-line-number" data-line-number="1071"></td>
        <td id="LC1071" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">this</span>.<span class="pl-smi">tickLabels</span>[i].<span class="pl-c1">style</span>[styleMargin] <span class="pl-k">=</span> <span class="pl-k">-</span>labelSize<span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1072" class="blob-num js-line-number" data-line-number="1072"></td>
        <td id="LC1072" class="blob-code blob-code-inner js-file-line">							} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1073" class="blob-num js-line-number" data-line-number="1073"></td>
        <td id="LC1073" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">this</span>.<span class="pl-smi">tickLabels</span>[i].<span class="pl-c1">style</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>marginLeft<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span>  <span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-smi">offsetWidth</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1074" class="blob-num js-line-number" data-line-number="1074"></td>
        <td id="LC1074" class="blob-code blob-code-inner js-file-line">								<span class="pl-smi">this</span>.<span class="pl-smi">tickLabelContainer</span>.<span class="pl-c1">style</span>[<span class="pl-s"><span class="pl-pds">&#39;</span>marginTop<span class="pl-pds">&#39;</span></span>] <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>.<span class="pl-smi">offsetWidth</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">*</span> <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1075" class="blob-num js-line-number" data-line-number="1075"></td>
        <td id="LC1075" class="blob-code blob-code-inner js-file-line">							}</td>
      </tr>
      <tr>
        <td id="L1076" class="blob-num js-line-number" data-line-number="1076"></td>
        <td id="LC1076" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1077" class="blob-num js-line-number" data-line-number="1077"></td>
        <td id="LC1077" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1078" class="blob-num js-line-number" data-line-number="1078"></td>
        <td id="LC1078" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1079" class="blob-num js-line-number" data-line-number="1079"></td>
        <td id="LC1079" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1080" class="blob-num js-line-number" data-line-number="1080"></td>
        <td id="LC1080" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> formattedTooltipVal;</td>
      </tr>
      <tr>
        <td id="L1081" class="blob-num js-line-number" data-line-number="1081"></td>
        <td id="LC1081" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1082" class="blob-num js-line-number" data-line-number="1082"></td>
        <td id="LC1082" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">range</span>) {</td>
      </tr>
      <tr>
        <td id="L1083" class="blob-num js-line-number" data-line-number="1083"></td>
        <td id="LC1083" class="blob-code blob-code-inner js-file-line">					formattedTooltipVal <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-en">formatter</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>);</td>
      </tr>
      <tr>
        <td id="L1084" class="blob-num js-line-number" data-line-number="1084"></td>
        <td id="LC1084" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_setText</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltipInner</span>, formattedTooltipVal);</td>
      </tr>
      <tr>
        <td id="L1085" class="blob-num js-line-number" data-line-number="1085"></td>
        <td id="LC1085" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>.<span class="pl-c1">style</span>[<span class="pl-smi">this</span>.<span class="pl-smi">stylePos</span>] <span class="pl-k">=</span> (positionPercentages[<span class="pl-c1">1</span>] <span class="pl-k">+</span> positionPercentages[<span class="pl-c1">0</span>])<span class="pl-k">/</span><span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1086" class="blob-num js-line-number" data-line-number="1086"></td>
        <td id="LC1086" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1087" class="blob-num js-line-number" data-line-number="1087"></td>
        <td id="LC1087" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1088" class="blob-num js-line-number" data-line-number="1088"></td>
        <td id="LC1088" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_css</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>margin-top<span class="pl-pds">&#39;</span></span>, <span class="pl-k">-</span><span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>.<span class="pl-smi">offsetHeight</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1089" class="blob-num js-line-number" data-line-number="1089"></td>
        <td id="LC1089" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1090" class="blob-num js-line-number" data-line-number="1090"></td>
        <td id="LC1090" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_css</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>margin-left<span class="pl-pds">&#39;</span></span>, <span class="pl-k">-</span><span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>.<span class="pl-smi">offsetWidth</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1091" class="blob-num js-line-number" data-line-number="1091"></td>
        <td id="LC1091" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1092" class="blob-num js-line-number" data-line-number="1092"></td>
        <td id="LC1092" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1093" class="blob-num js-line-number" data-line-number="1093"></td>
        <td id="LC1093" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1094" class="blob-num js-line-number" data-line-number="1094"></td>
        <td id="LC1094" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_css</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>margin-top<span class="pl-pds">&#39;</span></span>, <span class="pl-k">-</span><span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>.<span class="pl-smi">offsetHeight</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1095" class="blob-num js-line-number" data-line-number="1095"></td>
        <td id="LC1095" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1096" class="blob-num js-line-number" data-line-number="1096"></td>
        <td id="LC1096" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_css</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>margin-left<span class="pl-pds">&#39;</span></span>, <span class="pl-k">-</span><span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>.<span class="pl-smi">offsetWidth</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1097" class="blob-num js-line-number" data-line-number="1097"></td>
        <td id="LC1097" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1098" class="blob-num js-line-number" data-line-number="1098"></td>
        <td id="LC1098" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1099" class="blob-num js-line-number" data-line-number="1099"></td>
        <td id="LC1099" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> innerTooltipMinText <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-en">formatter</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L1100" class="blob-num js-line-number" data-line-number="1100"></td>
        <td id="LC1100" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_setText</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltipInner_min</span>, innerTooltipMinText);</td>
      </tr>
      <tr>
        <td id="L1101" class="blob-num js-line-number" data-line-number="1101"></td>
        <td id="LC1101" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1102" class="blob-num js-line-number" data-line-number="1102"></td>
        <td id="LC1102" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> innerTooltipMaxText <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-en">formatter</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L1103" class="blob-num js-line-number" data-line-number="1103"></td>
        <td id="LC1103" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_setText</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltipInner_max</span>, innerTooltipMaxText);</td>
      </tr>
      <tr>
        <td id="L1104" class="blob-num js-line-number" data-line-number="1104"></td>
        <td id="LC1104" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1105" class="blob-num js-line-number" data-line-number="1105"></td>
        <td id="LC1105" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>.<span class="pl-c1">style</span>[<span class="pl-smi">this</span>.<span class="pl-smi">stylePos</span>] <span class="pl-k">=</span> positionPercentages[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1106" class="blob-num js-line-number" data-line-number="1106"></td>
        <td id="LC1106" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1107" class="blob-num js-line-number" data-line-number="1107"></td>
        <td id="LC1107" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1108" class="blob-num js-line-number" data-line-number="1108"></td>
        <td id="LC1108" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_css</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>margin-top<span class="pl-pds">&#39;</span></span>, <span class="pl-k">-</span><span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>.<span class="pl-smi">offsetHeight</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1109" class="blob-num js-line-number" data-line-number="1109"></td>
        <td id="LC1109" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1110" class="blob-num js-line-number" data-line-number="1110"></td>
        <td id="LC1110" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_css</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>margin-left<span class="pl-pds">&#39;</span></span>, <span class="pl-k">-</span><span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>.<span class="pl-smi">offsetWidth</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1111" class="blob-num js-line-number" data-line-number="1111"></td>
        <td id="LC1111" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1112" class="blob-num js-line-number" data-line-number="1112"></td>
        <td id="LC1112" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1113" class="blob-num js-line-number" data-line-number="1113"></td>
        <td id="LC1113" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>.<span class="pl-c1">style</span>[<span class="pl-smi">this</span>.<span class="pl-smi">stylePos</span>] <span class="pl-k">=</span> positionPercentages[<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1114" class="blob-num js-line-number" data-line-number="1114"></td>
        <td id="LC1114" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1115" class="blob-num js-line-number" data-line-number="1115"></td>
        <td id="LC1115" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1116" class="blob-num js-line-number" data-line-number="1116"></td>
        <td id="LC1116" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_css</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>margin-top<span class="pl-pds">&#39;</span></span>, <span class="pl-k">-</span><span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>.<span class="pl-smi">offsetHeight</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1117" class="blob-num js-line-number" data-line-number="1117"></td>
        <td id="LC1117" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1118" class="blob-num js-line-number" data-line-number="1118"></td>
        <td id="LC1118" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_css</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>margin-left<span class="pl-pds">&#39;</span></span>, <span class="pl-k">-</span><span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>.<span class="pl-smi">offsetWidth</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1119" class="blob-num js-line-number" data-line-number="1119"></td>
        <td id="LC1119" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1120" class="blob-num js-line-number" data-line-number="1120"></td>
        <td id="LC1120" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1121" class="blob-num js-line-number" data-line-number="1121"></td>
        <td id="LC1121" class="blob-code blob-code-inner js-file-line">					formattedTooltipVal <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-en">formatter</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L1122" class="blob-num js-line-number" data-line-number="1122"></td>
        <td id="LC1122" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_setText</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltipInner</span>, formattedTooltipVal);</td>
      </tr>
      <tr>
        <td id="L1123" class="blob-num js-line-number" data-line-number="1123"></td>
        <td id="LC1123" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1124" class="blob-num js-line-number" data-line-number="1124"></td>
        <td id="LC1124" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>.<span class="pl-c1">style</span>[<span class="pl-smi">this</span>.<span class="pl-smi">stylePos</span>] <span class="pl-k">=</span> positionPercentages[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1125" class="blob-num js-line-number" data-line-number="1125"></td>
        <td id="LC1125" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1126" class="blob-num js-line-number" data-line-number="1126"></td>
        <td id="LC1126" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_css</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>margin-top<span class="pl-pds">&#39;</span></span>, <span class="pl-k">-</span><span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>.<span class="pl-smi">offsetHeight</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1127" class="blob-num js-line-number" data-line-number="1127"></td>
        <td id="LC1127" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1128" class="blob-num js-line-number" data-line-number="1128"></td>
        <td id="LC1128" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_css</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>margin-left<span class="pl-pds">&#39;</span></span>, <span class="pl-k">-</span><span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>.<span class="pl-smi">offsetWidth</span> <span class="pl-k">/</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1129" class="blob-num js-line-number" data-line-number="1129"></td>
        <td id="LC1129" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1130" class="blob-num js-line-number" data-line-number="1130"></td>
        <td id="LC1130" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1131" class="blob-num js-line-number" data-line-number="1131"></td>
        <td id="LC1131" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1132" class="blob-num js-line-number" data-line-number="1132"></td>
        <td id="LC1132" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1133" class="blob-num js-line-number" data-line-number="1133"></td>
        <td id="LC1133" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">trackLow</span>.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1134" class="blob-num js-line-number" data-line-number="1134"></td>
        <td id="LC1134" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">trackLow</span>.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">min</span>(positionPercentages[<span class="pl-c1">0</span>], positionPercentages[<span class="pl-c1">1</span>]) <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1135" class="blob-num js-line-number" data-line-number="1135"></td>
        <td id="LC1135" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1136" class="blob-num js-line-number" data-line-number="1136"></td>
        <td id="LC1136" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">trackSelection</span>.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">min</span>(positionPercentages[<span class="pl-c1">0</span>], positionPercentages[<span class="pl-c1">1</span>]) <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1137" class="blob-num js-line-number" data-line-number="1137"></td>
        <td id="LC1137" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">trackSelection</span>.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">abs</span>(positionPercentages[<span class="pl-c1">0</span>] <span class="pl-k">-</span> positionPercentages[<span class="pl-c1">1</span>]) <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1138" class="blob-num js-line-number" data-line-number="1138"></td>
        <td id="LC1138" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1139" class="blob-num js-line-number" data-line-number="1139"></td>
        <td id="LC1139" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">trackHigh</span>.<span class="pl-c1">style</span>.<span class="pl-c1">bottom</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1140" class="blob-num js-line-number" data-line-number="1140"></td>
        <td id="LC1140" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">trackHigh</span>.<span class="pl-c1">style</span>.<span class="pl-c1">height</span> <span class="pl-k">=</span> (<span class="pl-c1">100</span> <span class="pl-k">-</span> <span class="pl-smi">Math</span>.<span class="pl-c1">min</span>(positionPercentages[<span class="pl-c1">0</span>], positionPercentages[<span class="pl-c1">1</span>]) <span class="pl-k">-</span> <span class="pl-smi">Math</span>.<span class="pl-c1">abs</span>(positionPercentages[<span class="pl-c1">0</span>] <span class="pl-k">-</span> positionPercentages[<span class="pl-c1">1</span>])) <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1141" class="blob-num js-line-number" data-line-number="1141"></td>
        <td id="LC1141" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1142" class="blob-num js-line-number" data-line-number="1142"></td>
        <td id="LC1142" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1143" class="blob-num js-line-number" data-line-number="1143"></td>
        <td id="LC1143" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">trackLow</span>.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1144" class="blob-num js-line-number" data-line-number="1144"></td>
        <td id="LC1144" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">trackLow</span>.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">min</span>(positionPercentages[<span class="pl-c1">0</span>], positionPercentages[<span class="pl-c1">1</span>]) <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1145" class="blob-num js-line-number" data-line-number="1145"></td>
        <td id="LC1145" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1146" class="blob-num js-line-number" data-line-number="1146"></td>
        <td id="LC1146" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">trackSelection</span>.<span class="pl-c1">style</span>.<span class="pl-c1">left</span> <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">min</span>(positionPercentages[<span class="pl-c1">0</span>], positionPercentages[<span class="pl-c1">1</span>]) <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1147" class="blob-num js-line-number" data-line-number="1147"></td>
        <td id="LC1147" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">trackSelection</span>.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">abs</span>(positionPercentages[<span class="pl-c1">0</span>] <span class="pl-k">-</span> positionPercentages[<span class="pl-c1">1</span>]) <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1148" class="blob-num js-line-number" data-line-number="1148"></td>
        <td id="LC1148" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1149" class="blob-num js-line-number" data-line-number="1149"></td>
        <td id="LC1149" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">trackHigh</span>.<span class="pl-c1">style</span>.<span class="pl-c1">right</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1150" class="blob-num js-line-number" data-line-number="1150"></td>
        <td id="LC1150" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">trackHigh</span>.<span class="pl-c1">style</span>.<span class="pl-c1">width</span> <span class="pl-k">=</span> (<span class="pl-c1">100</span> <span class="pl-k">-</span> <span class="pl-smi">Math</span>.<span class="pl-c1">min</span>(positionPercentages[<span class="pl-c1">0</span>], positionPercentages[<span class="pl-c1">1</span>]) <span class="pl-k">-</span> <span class="pl-smi">Math</span>.<span class="pl-c1">abs</span>(positionPercentages[<span class="pl-c1">0</span>] <span class="pl-k">-</span> positionPercentages[<span class="pl-c1">1</span>])) <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">&#39;</span>%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1151" class="blob-num js-line-number" data-line-number="1151"></td>
        <td id="LC1151" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1152" class="blob-num js-line-number" data-line-number="1152"></td>
        <td id="LC1152" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">var</span> offset_min <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>.<span class="pl-en">getBoundingClientRect</span>();</td>
      </tr>
      <tr>
        <td id="L1153" class="blob-num js-line-number" data-line-number="1153"></td>
        <td id="LC1153" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">var</span> offset_max <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>.<span class="pl-en">getBoundingClientRect</span>();</td>
      </tr>
      <tr>
        <td id="L1154" class="blob-num js-line-number" data-line-number="1154"></td>
        <td id="LC1154" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1155" class="blob-num js-line-number" data-line-number="1155"></td>
        <td id="LC1155" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">if</span> (<span class="pl-smi">offset_min</span>.<span class="pl-c1">right</span> <span class="pl-k">&gt;</span> <span class="pl-smi">offset_max</span>.<span class="pl-c1">left</span>) {</td>
      </tr>
      <tr>
        <td id="L1156" class="blob-num js-line-number" data-line-number="1156"></td>
        <td id="LC1156" class="blob-code blob-code-inner js-file-line">			            <span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1157" class="blob-num js-line-number" data-line-number="1157"></td>
        <td id="LC1157" class="blob-code blob-code-inner js-file-line">			            <span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1158" class="blob-num js-line-number" data-line-number="1158"></td>
        <td id="LC1158" class="blob-code blob-code-inner js-file-line">			            <span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-c1">18</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1159" class="blob-num js-line-number" data-line-number="1159"></td>
        <td id="LC1159" class="blob-code blob-code-inner js-file-line">			        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1160" class="blob-num js-line-number" data-line-number="1160"></td>
        <td id="LC1160" class="blob-code blob-code-inner js-file-line">			            <span class="pl-smi">this</span>.<span class="pl-en">_removeClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1161" class="blob-num js-line-number" data-line-number="1161"></td>
        <td id="LC1161" class="blob-code blob-code-inner js-file-line">			            <span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(<span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1162" class="blob-num js-line-number" data-line-number="1162"></td>
        <td id="LC1162" class="blob-code blob-code-inner js-file-line">			            <span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>.<span class="pl-c1">style</span>.<span class="pl-c1">top</span>;</td>
      </tr>
      <tr>
        <td id="L1163" class="blob-num js-line-number" data-line-number="1163"></td>
        <td id="LC1163" class="blob-code blob-code-inner js-file-line">			        }</td>
      </tr>
      <tr>
        <td id="L1164" class="blob-num js-line-number" data-line-number="1164"></td>
        <td id="LC1164" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1165" class="blob-num js-line-number" data-line-number="1165"></td>
        <td id="LC1165" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1166" class="blob-num js-line-number" data-line-number="1166"></td>
        <td id="LC1166" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_removeProperty</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">prop</span>) {</td>
      </tr>
      <tr>
        <td id="L1167" class="blob-num js-line-number" data-line-number="1167"></td>
        <td id="LC1167" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">element</span>.<span class="pl-c1">style</span>.<span class="pl-smi">removeProperty</span>) {</td>
      </tr>
      <tr>
        <td id="L1168" class="blob-num js-line-number" data-line-number="1168"></td>
        <td id="LC1168" class="blob-code blob-code-inner js-file-line">				    <span class="pl-smi">element</span>.<span class="pl-c1">style</span>.<span class="pl-en">removeProperty</span>(prop);</td>
      </tr>
      <tr>
        <td id="L1169" class="blob-num js-line-number" data-line-number="1169"></td>
        <td id="LC1169" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1170" class="blob-num js-line-number" data-line-number="1170"></td>
        <td id="LC1170" class="blob-code blob-code-inner js-file-line">				    <span class="pl-smi">element</span>.<span class="pl-c1">style</span>.<span class="pl-en">removeAttribute</span>(prop);</td>
      </tr>
      <tr>
        <td id="L1171" class="blob-num js-line-number" data-line-number="1171"></td>
        <td id="LC1171" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1172" class="blob-num js-line-number" data-line-number="1172"></td>
        <td id="LC1172" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1173" class="blob-num js-line-number" data-line-number="1173"></td>
        <td id="LC1173" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_mousedown</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">ev</span>) {</td>
      </tr>
      <tr>
        <td id="L1174" class="blob-num js-line-number" data-line-number="1174"></td>
        <td id="LC1174" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">enabled</span>) {</td>
      </tr>
      <tr>
        <td id="L1175" class="blob-num js-line-number" data-line-number="1175"></td>
        <td id="LC1175" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1176" class="blob-num js-line-number" data-line-number="1176"></td>
        <td id="LC1176" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1177" class="blob-num js-line-number" data-line-number="1177"></td>
        <td id="LC1177" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1178" class="blob-num js-line-number" data-line-number="1178"></td>
        <td id="LC1178" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">offset</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_offset</span>(<span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>);</td>
      </tr>
      <tr>
        <td id="L1179" class="blob-num js-line-number" data-line-number="1179"></td>
        <td id="LC1179" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">size</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">sliderElem</span>[<span class="pl-smi">this</span>.<span class="pl-smi">sizePos</span>];</td>
      </tr>
      <tr>
        <td id="L1180" class="blob-num js-line-number" data-line-number="1180"></td>
        <td id="LC1180" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1181" class="blob-num js-line-number" data-line-number="1181"></td>
        <td id="LC1181" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> percentage <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_getPercentage</span>(ev);</td>
      </tr>
      <tr>
        <td id="L1182" class="blob-num js-line-number" data-line-number="1182"></td>
        <td id="LC1182" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1183" class="blob-num js-line-number" data-line-number="1183"></td>
        <td id="LC1183" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">range</span>) {</td>
      </tr>
      <tr>
        <td id="L1184" class="blob-num js-line-number" data-line-number="1184"></td>
        <td id="LC1184" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> diff1 <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">abs</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">0</span>] <span class="pl-k">-</span> percentage);</td>
      </tr>
      <tr>
        <td id="L1185" class="blob-num js-line-number" data-line-number="1185"></td>
        <td id="LC1185" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> diff2 <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">abs</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">1</span>] <span class="pl-k">-</span> percentage);</td>
      </tr>
      <tr>
        <td id="L1186" class="blob-num js-line-number" data-line-number="1186"></td>
        <td id="LC1186" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">dragged</span> <span class="pl-k">=</span> (diff1 <span class="pl-k">&lt;</span> diff2) <span class="pl-k">?</span> <span class="pl-c1">0</span> <span class="pl-k">:</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1187" class="blob-num js-line-number" data-line-number="1187"></td>
        <td id="LC1187" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1188" class="blob-num js-line-number" data-line-number="1188"></td>
        <td id="LC1188" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">dragged</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1189" class="blob-num js-line-number" data-line-number="1189"></td>
        <td id="LC1189" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1190" class="blob-num js-line-number" data-line-number="1190"></td>
        <td id="LC1190" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1191" class="blob-num js-line-number" data-line-number="1191"></td>
        <td id="LC1191" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">dragged</span>] <span class="pl-k">=</span> percentage;</td>
      </tr>
      <tr>
        <td id="L1192" class="blob-num js-line-number" data-line-number="1192"></td>
        <td id="LC1192" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_layout</span>();</td>
      </tr>
      <tr>
        <td id="L1193" class="blob-num js-line-number" data-line-number="1193"></td>
        <td id="LC1193" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1194" class="blob-num js-line-number" data-line-number="1194"></td>
        <td id="LC1194" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">touchCapable</span>) {</td>
      </tr>
      <tr>
        <td id="L1195" class="blob-num js-line-number" data-line-number="1195"></td>
        <td id="LC1195" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">document</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>touchmove<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mousemove</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1196" class="blob-num js-line-number" data-line-number="1196"></td>
        <td id="LC1196" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">document</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>touchend<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mouseup</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1197" class="blob-num js-line-number" data-line-number="1197"></td>
        <td id="LC1197" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1198" class="blob-num js-line-number" data-line-number="1198"></td>
        <td id="LC1198" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1199" class="blob-num js-line-number" data-line-number="1199"></td>
        <td id="LC1199" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-smi">mousemove</span>){</td>
      </tr>
      <tr>
        <td id="L1200" class="blob-num js-line-number" data-line-number="1200"></td>
        <td id="LC1200" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">document</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mousemove<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mousemove</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1201" class="blob-num js-line-number" data-line-number="1201"></td>
        <td id="LC1201" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1202" class="blob-num js-line-number" data-line-number="1202"></td>
        <td id="LC1202" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-smi">mouseup</span>){</td>
      </tr>
      <tr>
        <td id="L1203" class="blob-num js-line-number" data-line-number="1203"></td>
        <td id="LC1203" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">document</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mouseup<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mouseup</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1204" class="blob-num js-line-number" data-line-number="1204"></td>
        <td id="LC1204" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1205" class="blob-num js-line-number" data-line-number="1205"></td>
        <td id="LC1205" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1206" class="blob-num js-line-number" data-line-number="1206"></td>
        <td id="LC1206" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">mousemove</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">_mousemove</span>.<span class="pl-en">bind</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L1207" class="blob-num js-line-number" data-line-number="1207"></td>
        <td id="LC1207" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">mouseup</span> <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">_mouseup</span>.<span class="pl-en">bind</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L1208" class="blob-num js-line-number" data-line-number="1208"></td>
        <td id="LC1208" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1209" class="blob-num js-line-number" data-line-number="1209"></td>
        <td id="LC1209" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">touchCapable</span>) {</td>
      </tr>
      <tr>
        <td id="L1210" class="blob-num js-line-number" data-line-number="1210"></td>
        <td id="LC1210" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// Touch: Bind touch events:</span></td>
      </tr>
      <tr>
        <td id="L1211" class="blob-num js-line-number" data-line-number="1211"></td>
        <td id="LC1211" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">document</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>touchmove<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mousemove</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1212" class="blob-num js-line-number" data-line-number="1212"></td>
        <td id="LC1212" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">document</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>touchend<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mouseup</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1213" class="blob-num js-line-number" data-line-number="1213"></td>
        <td id="LC1213" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1214" class="blob-num js-line-number" data-line-number="1214"></td>
        <td id="LC1214" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Bind mouse events:</span></td>
      </tr>
      <tr>
        <td id="L1215" class="blob-num js-line-number" data-line-number="1215"></td>
        <td id="LC1215" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">document</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mousemove<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mousemove</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1216" class="blob-num js-line-number" data-line-number="1216"></td>
        <td id="LC1216" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">document</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mouseup<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mouseup</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1217" class="blob-num js-line-number" data-line-number="1217"></td>
        <td id="LC1217" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1218" class="blob-num js-line-number" data-line-number="1218"></td>
        <td id="LC1218" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">inDrag</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1219" class="blob-num js-line-number" data-line-number="1219"></td>
        <td id="LC1219" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> newValue <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_calculateValue</span>();</td>
      </tr>
      <tr>
        <td id="L1220" class="blob-num js-line-number" data-line-number="1220"></td>
        <td id="LC1220" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1221" class="blob-num js-line-number" data-line-number="1221"></td>
        <td id="LC1221" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slideStart<span class="pl-pds">&#39;</span></span>, newValue);</td>
      </tr>
      <tr>
        <td id="L1222" class="blob-num js-line-number" data-line-number="1222"></td>
        <td id="LC1222" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1223" class="blob-num js-line-number" data-line-number="1223"></td>
        <td id="LC1223" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_setDataVal</span>(newValue);</td>
      </tr>
      <tr>
        <td id="L1224" class="blob-num js-line-number" data-line-number="1224"></td>
        <td id="LC1224" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">setValue</span>(newValue, <span class="pl-c1">false</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1225" class="blob-num js-line-number" data-line-number="1225"></td>
        <td id="LC1225" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1226" class="blob-num js-line-number" data-line-number="1226"></td>
        <td id="LC1226" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_pauseEvent</span>(ev);</td>
      </tr>
      <tr>
        <td id="L1227" class="blob-num js-line-number" data-line-number="1227"></td>
        <td id="LC1227" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1228" class="blob-num js-line-number" data-line-number="1228"></td>
        <td id="LC1228" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">focus</span>) {</td>
      </tr>
      <tr>
        <td id="L1229" class="blob-num js-line-number" data-line-number="1229"></td>
        <td id="LC1229" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_triggerFocusOnHandle</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">dragged</span>);</td>
      </tr>
      <tr>
        <td id="L1230" class="blob-num js-line-number" data-line-number="1230"></td>
        <td id="LC1230" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1231" class="blob-num js-line-number" data-line-number="1231"></td>
        <td id="LC1231" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1232" class="blob-num js-line-number" data-line-number="1232"></td>
        <td id="LC1232" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1233" class="blob-num js-line-number" data-line-number="1233"></td>
        <td id="LC1233" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1234" class="blob-num js-line-number" data-line-number="1234"></td>
        <td id="LC1234" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_triggerFocusOnHandle</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">handleIdx</span>) {</td>
      </tr>
      <tr>
        <td id="L1235" class="blob-num js-line-number" data-line-number="1235"></td>
        <td id="LC1235" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(handleIdx <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L1236" class="blob-num js-line-number" data-line-number="1236"></td>
        <td id="LC1236" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">handle1</span>.<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L1237" class="blob-num js-line-number" data-line-number="1237"></td>
        <td id="LC1237" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1238" class="blob-num js-line-number" data-line-number="1238"></td>
        <td id="LC1238" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(handleIdx <span class="pl-k">===</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L1239" class="blob-num js-line-number" data-line-number="1239"></td>
        <td id="LC1239" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-smi">handle2</span>.<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L1240" class="blob-num js-line-number" data-line-number="1240"></td>
        <td id="LC1240" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1241" class="blob-num js-line-number" data-line-number="1241"></td>
        <td id="LC1241" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1242" class="blob-num js-line-number" data-line-number="1242"></td>
        <td id="LC1242" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_keydown</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">handleIdx</span>, <span class="pl-smi">ev</span>) {</td>
      </tr>
      <tr>
        <td id="L1243" class="blob-num js-line-number" data-line-number="1243"></td>
        <td id="LC1243" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">enabled</span>) {</td>
      </tr>
      <tr>
        <td id="L1244" class="blob-num js-line-number" data-line-number="1244"></td>
        <td id="LC1244" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1245" class="blob-num js-line-number" data-line-number="1245"></td>
        <td id="LC1245" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1246" class="blob-num js-line-number" data-line-number="1246"></td>
        <td id="LC1246" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1247" class="blob-num js-line-number" data-line-number="1247"></td>
        <td id="LC1247" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> dir;</td>
      </tr>
      <tr>
        <td id="L1248" class="blob-num js-line-number" data-line-number="1248"></td>
        <td id="LC1248" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">switch</span> (<span class="pl-smi">ev</span>.<span class="pl-smi">keyCode</span>) {</td>
      </tr>
      <tr>
        <td id="L1249" class="blob-num js-line-number" data-line-number="1249"></td>
        <td id="LC1249" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-c1">37</span><span class="pl-k">:</span> <span class="pl-c">// left</span></td>
      </tr>
      <tr>
        <td id="L1250" class="blob-num js-line-number" data-line-number="1250"></td>
        <td id="LC1250" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-c1">40</span><span class="pl-k">:</span> <span class="pl-c">// down</span></td>
      </tr>
      <tr>
        <td id="L1251" class="blob-num js-line-number" data-line-number="1251"></td>
        <td id="LC1251" class="blob-code blob-code-inner js-file-line">						dir <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1252" class="blob-num js-line-number" data-line-number="1252"></td>
        <td id="LC1252" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1253" class="blob-num js-line-number" data-line-number="1253"></td>
        <td id="LC1253" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-c1">39</span><span class="pl-k">:</span> <span class="pl-c">// right</span></td>
      </tr>
      <tr>
        <td id="L1254" class="blob-num js-line-number" data-line-number="1254"></td>
        <td id="LC1254" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-c1">38</span><span class="pl-k">:</span> <span class="pl-c">// up</span></td>
      </tr>
      <tr>
        <td id="L1255" class="blob-num js-line-number" data-line-number="1255"></td>
        <td id="LC1255" class="blob-code blob-code-inner js-file-line">						dir <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1256" class="blob-num js-line-number" data-line-number="1256"></td>
        <td id="LC1256" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1257" class="blob-num js-line-number" data-line-number="1257"></td>
        <td id="LC1257" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1258" class="blob-num js-line-number" data-line-number="1258"></td>
        <td id="LC1258" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>dir) {</td>
      </tr>
      <tr>
        <td id="L1259" class="blob-num js-line-number" data-line-number="1259"></td>
        <td id="LC1259" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L1260" class="blob-num js-line-number" data-line-number="1260"></td>
        <td id="LC1260" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1261" class="blob-num js-line-number" data-line-number="1261"></td>
        <td id="LC1261" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1262" class="blob-num js-line-number" data-line-number="1262"></td>
        <td id="LC1262" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// use natural arrow keys instead of from min to max</span></td>
      </tr>
      <tr>
        <td id="L1263" class="blob-num js-line-number" data-line-number="1263"></td>
        <td id="LC1263" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">natural_arrow_keys</span>) {</td>
      </tr>
      <tr>
        <td id="L1264" class="blob-num js-line-number" data-line-number="1264"></td>
        <td id="LC1264" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> ifVerticalAndNotReversed <span class="pl-k">=</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">reversed</span>);</td>
      </tr>
      <tr>
        <td id="L1265" class="blob-num js-line-number" data-line-number="1265"></td>
        <td id="LC1265" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> ifHorizontalAndReversed <span class="pl-k">=</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>horizontal<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">reversed</span>);</td>
      </tr>
      <tr>
        <td id="L1266" class="blob-num js-line-number" data-line-number="1266"></td>
        <td id="LC1266" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1267" class="blob-num js-line-number" data-line-number="1267"></td>
        <td id="LC1267" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (ifVerticalAndNotReversed <span class="pl-k">||</span> ifHorizontalAndReversed) {</td>
      </tr>
      <tr>
        <td id="L1268" class="blob-num js-line-number" data-line-number="1268"></td>
        <td id="LC1268" class="blob-code blob-code-inner js-file-line">						dir <span class="pl-k">=</span> <span class="pl-k">-</span>dir;</td>
      </tr>
      <tr>
        <td id="L1269" class="blob-num js-line-number" data-line-number="1269"></td>
        <td id="LC1269" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1270" class="blob-num js-line-number" data-line-number="1270"></td>
        <td id="LC1270" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1271" class="blob-num js-line-number" data-line-number="1271"></td>
        <td id="LC1271" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1272" class="blob-num js-line-number" data-line-number="1272"></td>
        <td id="LC1272" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> val <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[handleIdx] <span class="pl-k">+</span> dir <span class="pl-k">*</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">step</span>;</td>
      </tr>
      <tr>
        <td id="L1273" class="blob-num js-line-number" data-line-number="1273"></td>
        <td id="LC1273" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">range</span>) {</td>
      </tr>
      <tr>
        <td id="L1274" class="blob-num js-line-number" data-line-number="1274"></td>
        <td id="LC1274" class="blob-code blob-code-inner js-file-line">					val <span class="pl-k">=</span> [ (<span class="pl-k">!</span>handleIdx) <span class="pl-k">?</span> val <span class="pl-k">:</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L1275" class="blob-num js-line-number" data-line-number="1275"></td>
        <td id="LC1275" class="blob-code blob-code-inner js-file-line">						    ( handleIdx) <span class="pl-k">?</span> val <span class="pl-k">:</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">value</span>[<span class="pl-c1">1</span>]];</td>
      </tr>
      <tr>
        <td id="L1276" class="blob-num js-line-number" data-line-number="1276"></td>
        <td id="LC1276" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1277" class="blob-num js-line-number" data-line-number="1277"></td>
        <td id="LC1277" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1278" class="blob-num js-line-number" data-line-number="1278"></td>
        <td id="LC1278" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slideStart<span class="pl-pds">&#39;</span></span>, val);</td>
      </tr>
      <tr>
        <td id="L1279" class="blob-num js-line-number" data-line-number="1279"></td>
        <td id="LC1279" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_setDataVal</span>(val);</td>
      </tr>
      <tr>
        <td id="L1280" class="blob-num js-line-number" data-line-number="1280"></td>
        <td id="LC1280" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">setValue</span>(val, <span class="pl-c1">true</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1281" class="blob-num js-line-number" data-line-number="1281"></td>
        <td id="LC1281" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1282" class="blob-num js-line-number" data-line-number="1282"></td>
        <td id="LC1282" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_setDataVal</span>(val);</td>
      </tr>
      <tr>
        <td id="L1283" class="blob-num js-line-number" data-line-number="1283"></td>
        <td id="LC1283" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slideStop<span class="pl-pds">&#39;</span></span>, val);</td>
      </tr>
      <tr>
        <td id="L1284" class="blob-num js-line-number" data-line-number="1284"></td>
        <td id="LC1284" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_layout</span>();</td>
      </tr>
      <tr>
        <td id="L1285" class="blob-num js-line-number" data-line-number="1285"></td>
        <td id="LC1285" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1286" class="blob-num js-line-number" data-line-number="1286"></td>
        <td id="LC1286" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_pauseEvent</span>(ev);</td>
      </tr>
      <tr>
        <td id="L1287" class="blob-num js-line-number" data-line-number="1287"></td>
        <td id="LC1287" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1288" class="blob-num js-line-number" data-line-number="1288"></td>
        <td id="LC1288" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1289" class="blob-num js-line-number" data-line-number="1289"></td>
        <td id="LC1289" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1290" class="blob-num js-line-number" data-line-number="1290"></td>
        <td id="LC1290" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_pauseEvent</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">ev</span>) {</td>
      </tr>
      <tr>
        <td id="L1291" class="blob-num js-line-number" data-line-number="1291"></td>
        <td id="LC1291" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-smi">ev</span>.<span class="pl-smi">stopPropagation</span>) {</td>
      </tr>
      <tr>
        <td id="L1292" class="blob-num js-line-number" data-line-number="1292"></td>
        <td id="LC1292" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">ev</span>.<span class="pl-en">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L1293" class="blob-num js-line-number" data-line-number="1293"></td>
        <td id="LC1293" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1294" class="blob-num js-line-number" data-line-number="1294"></td>
        <td id="LC1294" class="blob-code blob-code-inner js-file-line">			    <span class="pl-k">if</span>(<span class="pl-smi">ev</span>.<span class="pl-smi">preventDefault</span>) {</td>
      </tr>
      <tr>
        <td id="L1295" class="blob-num js-line-number" data-line-number="1295"></td>
        <td id="LC1295" class="blob-code blob-code-inner js-file-line">			    	<span class="pl-smi">ev</span>.<span class="pl-en">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L1296" class="blob-num js-line-number" data-line-number="1296"></td>
        <td id="LC1296" class="blob-code blob-code-inner js-file-line">			    }</td>
      </tr>
      <tr>
        <td id="L1297" class="blob-num js-line-number" data-line-number="1297"></td>
        <td id="LC1297" class="blob-code blob-code-inner js-file-line">			    <span class="pl-smi">ev</span>.<span class="pl-smi">cancelBubble</span><span class="pl-k">=</span><span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L1298" class="blob-num js-line-number" data-line-number="1298"></td>
        <td id="LC1298" class="blob-code blob-code-inner js-file-line">			    <span class="pl-smi">ev</span>.<span class="pl-smi">returnValue</span><span class="pl-k">=</span><span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1299" class="blob-num js-line-number" data-line-number="1299"></td>
        <td id="LC1299" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1300" class="blob-num js-line-number" data-line-number="1300"></td>
        <td id="LC1300" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_mousemove</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">ev</span>) {</td>
      </tr>
      <tr>
        <td id="L1301" class="blob-num js-line-number" data-line-number="1301"></td>
        <td id="LC1301" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">enabled</span>) {</td>
      </tr>
      <tr>
        <td id="L1302" class="blob-num js-line-number" data-line-number="1302"></td>
        <td id="LC1302" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1303" class="blob-num js-line-number" data-line-number="1303"></td>
        <td id="LC1303" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1304" class="blob-num js-line-number" data-line-number="1304"></td>
        <td id="LC1304" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1305" class="blob-num js-line-number" data-line-number="1305"></td>
        <td id="LC1305" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> percentage <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_getPercentage</span>(ev);</td>
      </tr>
      <tr>
        <td id="L1306" class="blob-num js-line-number" data-line-number="1306"></td>
        <td id="LC1306" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_adjustPercentageForRangeSliders</span>(percentage);</td>
      </tr>
      <tr>
        <td id="L1307" class="blob-num js-line-number" data-line-number="1307"></td>
        <td id="LC1307" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">dragged</span>] <span class="pl-k">=</span> percentage;</td>
      </tr>
      <tr>
        <td id="L1308" class="blob-num js-line-number" data-line-number="1308"></td>
        <td id="LC1308" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_layout</span>();</td>
      </tr>
      <tr>
        <td id="L1309" class="blob-num js-line-number" data-line-number="1309"></td>
        <td id="LC1309" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1310" class="blob-num js-line-number" data-line-number="1310"></td>
        <td id="LC1310" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> val <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_calculateValue</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1311" class="blob-num js-line-number" data-line-number="1311"></td>
        <td id="LC1311" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">setValue</span>(val, <span class="pl-c1">true</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1312" class="blob-num js-line-number" data-line-number="1312"></td>
        <td id="LC1312" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1313" class="blob-num js-line-number" data-line-number="1313"></td>
        <td id="LC1313" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1314" class="blob-num js-line-number" data-line-number="1314"></td>
        <td id="LC1314" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1315" class="blob-num js-line-number" data-line-number="1315"></td>
        <td id="LC1315" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_adjustPercentageForRangeSliders</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">percentage</span>) {</td>
      </tr>
      <tr>
        <td id="L1316" class="blob-num js-line-number" data-line-number="1316"></td>
        <td id="LC1316" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">range</span>) {</td>
      </tr>
      <tr>
        <td id="L1317" class="blob-num js-line-number" data-line-number="1317"></td>
        <td id="LC1317" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> precision <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_getNumDigitsAfterDecimalPlace</span>(percentage);</td>
      </tr>
      <tr>
        <td id="L1318" class="blob-num js-line-number" data-line-number="1318"></td>
        <td id="LC1318" class="blob-code blob-code-inner js-file-line">					precision <span class="pl-k">=</span> precision <span class="pl-k">?</span> precision <span class="pl-k">-</span> <span class="pl-c1">1</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1319" class="blob-num js-line-number" data-line-number="1319"></td>
        <td id="LC1319" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> percentageWithAdjustedPrecision <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_applyToFixedAndParseFloat</span>(percentage, precision);</td>
      </tr>
      <tr>
        <td id="L1320" class="blob-num js-line-number" data-line-number="1320"></td>
        <td id="LC1320" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">dragged</span> <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">this</span>.<span class="pl-en">_applyToFixedAndParseFloat</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">1</span>], precision) <span class="pl-k">&lt;</span> percentageWithAdjustedPrecision) {</td>
      </tr>
      <tr>
        <td id="L1321" class="blob-num js-line-number" data-line-number="1321"></td>
        <td id="LC1321" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">0</span>] <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L1322" class="blob-num js-line-number" data-line-number="1322"></td>
        <td id="LC1322" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">dragged</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L1323" class="blob-num js-line-number" data-line-number="1323"></td>
        <td id="LC1323" class="blob-code blob-code-inner js-file-line">					} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">dragged</span> <span class="pl-k">===</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">this</span>.<span class="pl-en">_applyToFixedAndParseFloat</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">0</span>], precision) <span class="pl-k">&gt;</span> percentageWithAdjustedPrecision) {</td>
      </tr>
      <tr>
        <td id="L1324" class="blob-num js-line-number" data-line-number="1324"></td>
        <td id="LC1324" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1325" class="blob-num js-line-number" data-line-number="1325"></td>
        <td id="LC1325" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">dragged</span> <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L1326" class="blob-num js-line-number" data-line-number="1326"></td>
        <td id="LC1326" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1327" class="blob-num js-line-number" data-line-number="1327"></td>
        <td id="LC1327" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1328" class="blob-num js-line-number" data-line-number="1328"></td>
        <td id="LC1328" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1329" class="blob-num js-line-number" data-line-number="1329"></td>
        <td id="LC1329" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_mouseup</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1330" class="blob-num js-line-number" data-line-number="1330"></td>
        <td id="LC1330" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">enabled</span>) {</td>
      </tr>
      <tr>
        <td id="L1331" class="blob-num js-line-number" data-line-number="1331"></td>
        <td id="LC1331" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1332" class="blob-num js-line-number" data-line-number="1332"></td>
        <td id="LC1332" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1333" class="blob-num js-line-number" data-line-number="1333"></td>
        <td id="LC1333" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">touchCapable</span>) {</td>
      </tr>
      <tr>
        <td id="L1334" class="blob-num js-line-number" data-line-number="1334"></td>
        <td id="LC1334" class="blob-code blob-code-inner js-file-line">					<span class="pl-c">// Touch: Unbind touch event handlers:</span></td>
      </tr>
      <tr>
        <td id="L1335" class="blob-num js-line-number" data-line-number="1335"></td>
        <td id="LC1335" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">document</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>touchmove<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mousemove</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1336" class="blob-num js-line-number" data-line-number="1336"></td>
        <td id="LC1336" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">document</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>touchend<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mouseup</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1337" class="blob-num js-line-number" data-line-number="1337"></td>
        <td id="LC1337" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1338" class="blob-num js-line-number" data-line-number="1338"></td>
        <td id="LC1338" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">// Unbind mouse event handlers:</span></td>
      </tr>
      <tr>
        <td id="L1339" class="blob-num js-line-number" data-line-number="1339"></td>
        <td id="LC1339" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">document</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mousemove<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mousemove</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1340" class="blob-num js-line-number" data-line-number="1340"></td>
        <td id="LC1340" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">document</span>.<span class="pl-en">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>mouseup<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">this</span>.<span class="pl-smi">mouseup</span>, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1341" class="blob-num js-line-number" data-line-number="1341"></td>
        <td id="LC1341" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1342" class="blob-num js-line-number" data-line-number="1342"></td>
        <td id="LC1342" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">inDrag</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1343" class="blob-num js-line-number" data-line-number="1343"></td>
        <td id="LC1343" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">over</span> <span class="pl-k">===</span> <span class="pl-c1">false</span>) {</td>
      </tr>
      <tr>
        <td id="L1344" class="blob-num js-line-number" data-line-number="1344"></td>
        <td id="LC1344" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_hideTooltip</span>();</td>
      </tr>
      <tr>
        <td id="L1345" class="blob-num js-line-number" data-line-number="1345"></td>
        <td id="LC1345" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1346" class="blob-num js-line-number" data-line-number="1346"></td>
        <td id="LC1346" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> val <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_calculateValue</span>(<span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L1347" class="blob-num js-line-number" data-line-number="1347"></td>
        <td id="LC1347" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1348" class="blob-num js-line-number" data-line-number="1348"></td>
        <td id="LC1348" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_layout</span>();</td>
      </tr>
      <tr>
        <td id="L1349" class="blob-num js-line-number" data-line-number="1349"></td>
        <td id="LC1349" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_setDataVal</span>(val);</td>
      </tr>
      <tr>
        <td id="L1350" class="blob-num js-line-number" data-line-number="1350"></td>
        <td id="LC1350" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-en">_trigger</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>slideStop<span class="pl-pds">&#39;</span></span>, val);</td>
      </tr>
      <tr>
        <td id="L1351" class="blob-num js-line-number" data-line-number="1351"></td>
        <td id="LC1351" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1352" class="blob-num js-line-number" data-line-number="1352"></td>
        <td id="LC1352" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L1353" class="blob-num js-line-number" data-line-number="1353"></td>
        <td id="LC1353" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1354" class="blob-num js-line-number" data-line-number="1354"></td>
        <td id="LC1354" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_calculateValue</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">snapToClosestTick</span>) {</td>
      </tr>
      <tr>
        <td id="L1355" class="blob-num js-line-number" data-line-number="1355"></td>
        <td id="LC1355" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> val;</td>
      </tr>
      <tr>
        <td id="L1356" class="blob-num js-line-number" data-line-number="1356"></td>
        <td id="LC1356" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">range</span>) {</td>
      </tr>
      <tr>
        <td id="L1357" class="blob-num js-line-number" data-line-number="1357"></td>
        <td id="LC1357" class="blob-code blob-code-inner js-file-line">					val <span class="pl-k">=</span> [<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">min</span>,<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">max</span>];</td>
      </tr>
      <tr>
        <td id="L1358" class="blob-num js-line-number" data-line-number="1358"></td>
        <td id="LC1358" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">0</span>] <span class="pl-k">!==</span> <span class="pl-c1">0</span>){</td>
      </tr>
      <tr>
        <td id="L1359" class="blob-num js-line-number" data-line-number="1359"></td>
        <td id="LC1359" class="blob-code blob-code-inner js-file-line">			            val[<span class="pl-c1">0</span>] <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_toValue</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L1360" class="blob-num js-line-number" data-line-number="1360"></td>
        <td id="LC1360" class="blob-code blob-code-inner js-file-line">			            val[<span class="pl-c1">0</span>] <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_applyPrecision</span>(val[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L1361" class="blob-num js-line-number" data-line-number="1361"></td>
        <td id="LC1361" class="blob-code blob-code-inner js-file-line">			        }</td>
      </tr>
      <tr>
        <td id="L1362" class="blob-num js-line-number" data-line-number="1362"></td>
        <td id="LC1362" class="blob-code blob-code-inner js-file-line">			        <span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">1</span>] <span class="pl-k">!==</span> <span class="pl-c1">100</span>){</td>
      </tr>
      <tr>
        <td id="L1363" class="blob-num js-line-number" data-line-number="1363"></td>
        <td id="LC1363" class="blob-code blob-code-inner js-file-line">			            val[<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_toValue</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L1364" class="blob-num js-line-number" data-line-number="1364"></td>
        <td id="LC1364" class="blob-code blob-code-inner js-file-line">			            val[<span class="pl-c1">1</span>] <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_applyPrecision</span>(val[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L1365" class="blob-num js-line-number" data-line-number="1365"></td>
        <td id="LC1365" class="blob-code blob-code-inner js-file-line">			        }</td>
      </tr>
      <tr>
        <td id="L1366" class="blob-num js-line-number" data-line-number="1366"></td>
        <td id="LC1366" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1367" class="blob-num js-line-number" data-line-number="1367"></td>
        <td id="LC1367" class="blob-code blob-code-inner js-file-line">		            val <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_toValue</span>(<span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L1368" class="blob-num js-line-number" data-line-number="1368"></td>
        <td id="LC1368" class="blob-code blob-code-inner js-file-line">					val <span class="pl-k">=</span> <span class="pl-c1">parseFloat</span>(val);</td>
      </tr>
      <tr>
        <td id="L1369" class="blob-num js-line-number" data-line-number="1369"></td>
        <td id="LC1369" class="blob-code blob-code-inner js-file-line">					val <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-en">_applyPrecision</span>(val);</td>
      </tr>
      <tr>
        <td id="L1370" class="blob-num js-line-number" data-line-number="1370"></td>
        <td id="LC1370" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1371" class="blob-num js-line-number" data-line-number="1371"></td>
        <td id="LC1371" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1372" class="blob-num js-line-number" data-line-number="1372"></td>
        <td id="LC1372" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (snapToClosestTick) {</td>
      </tr>
      <tr>
        <td id="L1373" class="blob-num js-line-number" data-line-number="1373"></td>
        <td id="LC1373" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> min <span class="pl-k">=</span> [val, <span class="pl-c1">Infinity</span>];</td>
      </tr>
      <tr>
        <td id="L1374" class="blob-num js-line-number" data-line-number="1374"></td>
        <td id="LC1374" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1375" class="blob-num js-line-number" data-line-number="1375"></td>
        <td id="LC1375" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> diff <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">abs</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>[i] <span class="pl-k">-</span> val);</td>
      </tr>
      <tr>
        <td id="L1376" class="blob-num js-line-number" data-line-number="1376"></td>
        <td id="LC1376" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (diff <span class="pl-k">&lt;=</span> min[<span class="pl-c1">1</span>]) {</td>
      </tr>
      <tr>
        <td id="L1377" class="blob-num js-line-number" data-line-number="1377"></td>
        <td id="LC1377" class="blob-code blob-code-inner js-file-line">							min <span class="pl-k">=</span> [<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks</span>[i], diff];</td>
      </tr>
      <tr>
        <td id="L1378" class="blob-num js-line-number" data-line-number="1378"></td>
        <td id="LC1378" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L1379" class="blob-num js-line-number" data-line-number="1379"></td>
        <td id="LC1379" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1380" class="blob-num js-line-number" data-line-number="1380"></td>
        <td id="LC1380" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (min[<span class="pl-c1">1</span>] <span class="pl-k">&lt;=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">ticks_snap_bounds</span>) {</td>
      </tr>
      <tr>
        <td id="L1381" class="blob-num js-line-number" data-line-number="1381"></td>
        <td id="LC1381" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span> min[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1382" class="blob-num js-line-number" data-line-number="1382"></td>
        <td id="LC1382" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1383" class="blob-num js-line-number" data-line-number="1383"></td>
        <td id="LC1383" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1384" class="blob-num js-line-number" data-line-number="1384"></td>
        <td id="LC1384" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1385" class="blob-num js-line-number" data-line-number="1385"></td>
        <td id="LC1385" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> val;</td>
      </tr>
      <tr>
        <td id="L1386" class="blob-num js-line-number" data-line-number="1386"></td>
        <td id="LC1386" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1387" class="blob-num js-line-number" data-line-number="1387"></td>
        <td id="LC1387" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_applyPrecision</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">val</span>) {</td>
      </tr>
      <tr>
        <td id="L1388" class="blob-num js-line-number" data-line-number="1388"></td>
        <td id="LC1388" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> precision <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">precision</span> <span class="pl-k">||</span> <span class="pl-smi">this</span>.<span class="pl-en">_getNumDigitsAfterDecimalPlace</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">step</span>);</td>
      </tr>
      <tr>
        <td id="L1389" class="blob-num js-line-number" data-line-number="1389"></td>
        <td id="LC1389" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-en">_applyToFixedAndParseFloat</span>(val, precision);</td>
      </tr>
      <tr>
        <td id="L1390" class="blob-num js-line-number" data-line-number="1390"></td>
        <td id="LC1390" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1391" class="blob-num js-line-number" data-line-number="1391"></td>
        <td id="LC1391" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_getNumDigitsAfterDecimalPlace</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">num</span>) {</td>
      </tr>
      <tr>
        <td id="L1392" class="blob-num js-line-number" data-line-number="1392"></td>
        <td id="LC1392" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> match <span class="pl-k">=</span> (<span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span><span class="pl-k">+</span>num).<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-cce">\.</span>(<span class="pl-c1">\d</span><span class="pl-k">+</span>))<span class="pl-k">?</span>(?:<span class="pl-c1">[eE]</span>(<span class="pl-c1">[+-]</span><span class="pl-k">?</span><span class="pl-c1">\d</span><span class="pl-k">+</span>))<span class="pl-k">?</span><span class="pl-k">$</span><span class="pl-pds">/</span></span>);</td>
      </tr>
      <tr>
        <td id="L1393" class="blob-num js-line-number" data-line-number="1393"></td>
        <td id="LC1393" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span>match) { <span class="pl-k">return</span> <span class="pl-c1">0</span>; }</td>
      </tr>
      <tr>
        <td id="L1394" class="blob-num js-line-number" data-line-number="1394"></td>
        <td id="LC1394" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>, (match[<span class="pl-c1">1</span>] <span class="pl-k">?</span> match[<span class="pl-c1">1</span>].<span class="pl-c1">length</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>) <span class="pl-k">-</span> (match[<span class="pl-c1">2</span>] <span class="pl-k">?</span> <span class="pl-k">+</span>match[<span class="pl-c1">2</span>] <span class="pl-k">:</span> <span class="pl-c1">0</span>));</td>
      </tr>
      <tr>
        <td id="L1395" class="blob-num js-line-number" data-line-number="1395"></td>
        <td id="LC1395" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1396" class="blob-num js-line-number" data-line-number="1396"></td>
        <td id="LC1396" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_applyToFixedAndParseFloat</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">num</span>, <span class="pl-smi">toFixedInput</span>) {</td>
      </tr>
      <tr>
        <td id="L1397" class="blob-num js-line-number" data-line-number="1397"></td>
        <td id="LC1397" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> truncatedNum <span class="pl-k">=</span> <span class="pl-smi">num</span>.<span class="pl-en">toFixed</span>(toFixedInput);</td>
      </tr>
      <tr>
        <td id="L1398" class="blob-num js-line-number" data-line-number="1398"></td>
        <td id="LC1398" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">parseFloat</span>(truncatedNum);</td>
      </tr>
      <tr>
        <td id="L1399" class="blob-num js-line-number" data-line-number="1399"></td>
        <td id="LC1399" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1400" class="blob-num js-line-number" data-line-number="1400"></td>
        <td id="LC1400" class="blob-code blob-code-inner js-file-line">			<span class="pl-c">/*</span></td>
      </tr>
      <tr>
        <td id="L1401" class="blob-num js-line-number" data-line-number="1401"></td>
        <td id="LC1401" class="blob-code blob-code-inner js-file-line"><span class="pl-c">				Credits to Mike Samuel for the following method!</span></td>
      </tr>
      <tr>
        <td id="L1402" class="blob-num js-line-number" data-line-number="1402"></td>
        <td id="LC1402" class="blob-code blob-code-inner js-file-line"><span class="pl-c">				Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number</span></td>
      </tr>
      <tr>
        <td id="L1403" class="blob-num js-line-number" data-line-number="1403"></td>
        <td id="LC1403" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			*/</span></td>
      </tr>
      <tr>
        <td id="L1404" class="blob-num js-line-number" data-line-number="1404"></td>
        <td id="LC1404" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_getPercentage</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">ev</span>) {</td>
      </tr>
      <tr>
        <td id="L1405" class="blob-num js-line-number" data-line-number="1405"></td>
        <td id="LC1405" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-smi">touchCapable</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">ev</span>.<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>touchstart<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-smi">ev</span>.<span class="pl-c1">type</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>touchmove<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L1406" class="blob-num js-line-number" data-line-number="1406"></td>
        <td id="LC1406" class="blob-code blob-code-inner js-file-line">					ev <span class="pl-k">=</span> <span class="pl-smi">ev</span>.<span class="pl-smi">touches</span>[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L1407" class="blob-num js-line-number" data-line-number="1407"></td>
        <td id="LC1407" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1408" class="blob-num js-line-number" data-line-number="1408"></td>
        <td id="LC1408" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1409" class="blob-num js-line-number" data-line-number="1409"></td>
        <td id="LC1409" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> eventPosition <span class="pl-k">=</span> ev[<span class="pl-smi">this</span>.<span class="pl-smi">mousePos</span>];</td>
      </tr>
      <tr>
        <td id="L1410" class="blob-num js-line-number" data-line-number="1410"></td>
        <td id="LC1410" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> sliderOffset <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">offset</span>[<span class="pl-smi">this</span>.<span class="pl-smi">stylePos</span>];</td>
      </tr>
      <tr>
        <td id="L1411" class="blob-num js-line-number" data-line-number="1411"></td>
        <td id="LC1411" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> distanceToSlide <span class="pl-k">=</span> eventPosition <span class="pl-k">-</span> sliderOffset;</td>
      </tr>
      <tr>
        <td id="L1412" class="blob-num js-line-number" data-line-number="1412"></td>
        <td id="LC1412" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Calculate what percent of the length the slider handle has slid</span></td>
      </tr>
      <tr>
        <td id="L1413" class="blob-num js-line-number" data-line-number="1413"></td>
        <td id="LC1413" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> percentage <span class="pl-k">=</span> (distanceToSlide <span class="pl-k">/</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-c1">size</span>) <span class="pl-k">*</span> <span class="pl-c1">100</span>;</td>
      </tr>
      <tr>
        <td id="L1414" class="blob-num js-line-number" data-line-number="1414"></td>
        <td id="LC1414" class="blob-code blob-code-inner js-file-line">				percentage <span class="pl-k">=</span> <span class="pl-smi">Math</span>.<span class="pl-c1">round</span>(percentage <span class="pl-k">/</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">2</span>]) <span class="pl-k">*</span> <span class="pl-smi">this</span>.<span class="pl-smi">_state</span>.<span class="pl-smi">percentage</span>[<span class="pl-c1">2</span>];</td>
      </tr>
      <tr>
        <td id="L1415" class="blob-num js-line-number" data-line-number="1415"></td>
        <td id="LC1415" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">reversed</span>) {</td>
      </tr>
      <tr>
        <td id="L1416" class="blob-num js-line-number" data-line-number="1416"></td>
        <td id="LC1416" class="blob-code blob-code-inner js-file-line">					percentage <span class="pl-k">=</span> <span class="pl-c1">100</span> <span class="pl-k">-</span> percentage;</td>
      </tr>
      <tr>
        <td id="L1417" class="blob-num js-line-number" data-line-number="1417"></td>
        <td id="LC1417" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1418" class="blob-num js-line-number" data-line-number="1418"></td>
        <td id="LC1418" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1419" class="blob-num js-line-number" data-line-number="1419"></td>
        <td id="LC1419" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// Make sure the percent is within the bounds of the slider.</span></td>
      </tr>
      <tr>
        <td id="L1420" class="blob-num js-line-number" data-line-number="1420"></td>
        <td id="LC1420" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// 0% corresponds to the &#39;min&#39; value of the slide</span></td>
      </tr>
      <tr>
        <td id="L1421" class="blob-num js-line-number" data-line-number="1421"></td>
        <td id="LC1421" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">// 100% corresponds to the &#39;max&#39; value of the slide</span></td>
      </tr>
      <tr>
        <td id="L1422" class="blob-num js-line-number" data-line-number="1422"></td>
        <td id="LC1422" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">Math</span>.<span class="pl-c1">max</span>(<span class="pl-c1">0</span>, <span class="pl-smi">Math</span>.<span class="pl-c1">min</span>(<span class="pl-c1">100</span>, percentage));</td>
      </tr>
      <tr>
        <td id="L1423" class="blob-num js-line-number" data-line-number="1423"></td>
        <td id="LC1423" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1424" class="blob-num js-line-number" data-line-number="1424"></td>
        <td id="LC1424" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_validateInputValue</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">val</span>) {</td>
      </tr>
      <tr>
        <td id="L1425" class="blob-num js-line-number" data-line-number="1425"></td>
        <td id="LC1425" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">typeof</span> val <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1426" class="blob-num js-line-number" data-line-number="1426"></td>
        <td id="LC1426" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> val;</td>
      </tr>
      <tr>
        <td id="L1427" class="blob-num js-line-number" data-line-number="1427"></td>
        <td id="LC1427" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-smi">Array</span>.<span class="pl-en">isArray</span>(val)) {</td>
      </tr>
      <tr>
        <td id="L1428" class="blob-num js-line-number" data-line-number="1428"></td>
        <td id="LC1428" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_validateArray</span>(val);</td>
      </tr>
      <tr>
        <td id="L1429" class="blob-num js-line-number" data-line-number="1429"></td>
        <td id="LC1429" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> val;</td>
      </tr>
      <tr>
        <td id="L1430" class="blob-num js-line-number" data-line-number="1430"></td>
        <td id="LC1430" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1431" class="blob-num js-line-number" data-line-number="1431"></td>
        <td id="LC1431" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>( <span class="pl-smi">ErrorMsgs</span>.<span class="pl-en">formatInvalidInputErrorMsg</span>(val) );</td>
      </tr>
      <tr>
        <td id="L1432" class="blob-num js-line-number" data-line-number="1432"></td>
        <td id="LC1432" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1433" class="blob-num js-line-number" data-line-number="1433"></td>
        <td id="LC1433" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1434" class="blob-num js-line-number" data-line-number="1434"></td>
        <td id="LC1434" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_validateArray</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">val</span>) {</td>
      </tr>
      <tr>
        <td id="L1435" class="blob-num js-line-number" data-line-number="1435"></td>
        <td id="LC1435" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">val</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1436" class="blob-num js-line-number" data-line-number="1436"></td>
        <td id="LC1436" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> input <span class="pl-k">=</span>  val[i];</td>
      </tr>
      <tr>
        <td id="L1437" class="blob-num js-line-number" data-line-number="1437"></td>
        <td id="LC1437" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-k">typeof</span> input <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>) { <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>( <span class="pl-smi">ErrorMsgs</span>.<span class="pl-en">formatInvalidInputErrorMsg</span>(input) ); }</td>
      </tr>
      <tr>
        <td id="L1438" class="blob-num js-line-number" data-line-number="1438"></td>
        <td id="LC1438" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1439" class="blob-num js-line-number" data-line-number="1439"></td>
        <td id="LC1439" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1440" class="blob-num js-line-number" data-line-number="1440"></td>
        <td id="LC1440" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_setDataVal</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">val</span>) {</td>
      </tr>
      <tr>
        <td id="L1441" class="blob-num js-line-number" data-line-number="1441"></td>
        <td id="LC1441" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-value<span class="pl-pds">&#39;</span></span>, val);</td>
      </tr>
      <tr>
        <td id="L1442" class="blob-num js-line-number" data-line-number="1442"></td>
        <td id="LC1442" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span>, val);</td>
      </tr>
      <tr>
        <td id="L1443" class="blob-num js-line-number" data-line-number="1443"></td>
        <td id="LC1443" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">this</span>.<span class="pl-smi">element</span>.<span class="pl-c1">value</span> <span class="pl-k">=</span> val;</td>
      </tr>
      <tr>
        <td id="L1444" class="blob-num js-line-number" data-line-number="1444"></td>
        <td id="LC1444" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1445" class="blob-num js-line-number" data-line-number="1445"></td>
        <td id="LC1445" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_trigger</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">evt</span>, <span class="pl-smi">val</span>) {</td>
      </tr>
      <tr>
        <td id="L1446" class="blob-num js-line-number" data-line-number="1446"></td>
        <td id="LC1446" class="blob-code blob-code-inner js-file-line">				val <span class="pl-k">=</span> (val <span class="pl-k">||</span> val <span class="pl-k">===</span> <span class="pl-c1">0</span>) <span class="pl-k">?</span> val <span class="pl-k">:</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L1447" class="blob-num js-line-number" data-line-number="1447"></td>
        <td id="LC1447" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1448" class="blob-num js-line-number" data-line-number="1448"></td>
        <td id="LC1448" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> callbackFnArray <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-smi">eventToCallbackMap</span>[evt];</td>
      </tr>
      <tr>
        <td id="L1449" class="blob-num js-line-number" data-line-number="1449"></td>
        <td id="LC1449" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(callbackFnArray <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">callbackFnArray</span>.<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L1450" class="blob-num js-line-number" data-line-number="1450"></td>
        <td id="LC1450" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">callbackFnArray</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1451" class="blob-num js-line-number" data-line-number="1451"></td>
        <td id="LC1451" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">var</span> callbackFn <span class="pl-k">=</span> callbackFnArray[i];</td>
      </tr>
      <tr>
        <td id="L1452" class="blob-num js-line-number" data-line-number="1452"></td>
        <td id="LC1452" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">callbackFn</span>(val);</td>
      </tr>
      <tr>
        <td id="L1453" class="blob-num js-line-number" data-line-number="1453"></td>
        <td id="LC1453" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1454" class="blob-num js-line-number" data-line-number="1454"></td>
        <td id="LC1454" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1455" class="blob-num js-line-number" data-line-number="1455"></td>
        <td id="LC1455" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1456" class="blob-num js-line-number" data-line-number="1456"></td>
        <td id="LC1456" class="blob-code blob-code-inner js-file-line">				<span class="pl-c">/* If JQuery exists, trigger JQuery events */</span></td>
      </tr>
      <tr>
        <td id="L1457" class="blob-num js-line-number" data-line-number="1457"></td>
        <td id="LC1457" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>($) {</td>
      </tr>
      <tr>
        <td id="L1458" class="blob-num js-line-number" data-line-number="1458"></td>
        <td id="LC1458" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">this</span>.<span class="pl-en">_triggerJQueryEvent</span>(evt, val);</td>
      </tr>
      <tr>
        <td id="L1459" class="blob-num js-line-number" data-line-number="1459"></td>
        <td id="LC1459" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1460" class="blob-num js-line-number" data-line-number="1460"></td>
        <td id="LC1460" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1461" class="blob-num js-line-number" data-line-number="1461"></td>
        <td id="LC1461" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_triggerJQueryEvent</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">evt</span>, <span class="pl-smi">val</span>) {</td>
      </tr>
      <tr>
        <td id="L1462" class="blob-num js-line-number" data-line-number="1462"></td>
        <td id="LC1462" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> eventData <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L1463" class="blob-num js-line-number" data-line-number="1463"></td>
        <td id="LC1463" class="blob-code blob-code-inner js-file-line">					type<span class="pl-k">:</span> evt,</td>
      </tr>
      <tr>
        <td id="L1464" class="blob-num js-line-number" data-line-number="1464"></td>
        <td id="LC1464" class="blob-code blob-code-inner js-file-line">					value<span class="pl-k">:</span> val</td>
      </tr>
      <tr>
        <td id="L1465" class="blob-num js-line-number" data-line-number="1465"></td>
        <td id="LC1465" class="blob-code blob-code-inner js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L1466" class="blob-num js-line-number" data-line-number="1466"></td>
        <td id="LC1466" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.$<span class="pl-smi">element</span>.<span class="pl-en">trigger</span>(eventData);</td>
      </tr>
      <tr>
        <td id="L1467" class="blob-num js-line-number" data-line-number="1467"></td>
        <td id="LC1467" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.$<span class="pl-smi">sliderElem</span>.<span class="pl-en">trigger</span>(eventData);</td>
      </tr>
      <tr>
        <td id="L1468" class="blob-num js-line-number" data-line-number="1468"></td>
        <td id="LC1468" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1469" class="blob-num js-line-number" data-line-number="1469"></td>
        <td id="LC1469" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_unbindJQueryEventHandlers</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L1470" class="blob-num js-line-number" data-line-number="1470"></td>
        <td id="LC1470" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.$<span class="pl-smi">element</span>.<span class="pl-en">off</span>();</td>
      </tr>
      <tr>
        <td id="L1471" class="blob-num js-line-number" data-line-number="1471"></td>
        <td id="LC1471" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">this</span>.$<span class="pl-smi">sliderElem</span>.<span class="pl-en">off</span>();</td>
      </tr>
      <tr>
        <td id="L1472" class="blob-num js-line-number" data-line-number="1472"></td>
        <td id="LC1472" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1473" class="blob-num js-line-number" data-line-number="1473"></td>
        <td id="LC1473" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_setText</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">text</span>) {</td>
      </tr>
      <tr>
        <td id="L1474" class="blob-num js-line-number" data-line-number="1474"></td>
        <td id="LC1474" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-smi">element</span>.<span class="pl-smi">innerText</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1475" class="blob-num js-line-number" data-line-number="1475"></td>
        <td id="LC1475" class="blob-code blob-code-inner js-file-line">			 		<span class="pl-smi">element</span>.<span class="pl-smi">innerText</span> <span class="pl-k">=</span> text;</td>
      </tr>
      <tr>
        <td id="L1476" class="blob-num js-line-number" data-line-number="1476"></td>
        <td id="LC1476" class="blob-code blob-code-inner js-file-line">			 	} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">typeof</span> <span class="pl-smi">element</span>.<span class="pl-smi">textContent</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1477" class="blob-num js-line-number" data-line-number="1477"></td>
        <td id="LC1477" class="blob-code blob-code-inner js-file-line">			 		<span class="pl-smi">element</span>.<span class="pl-smi">textContent</span> <span class="pl-k">=</span> text;</td>
      </tr>
      <tr>
        <td id="L1478" class="blob-num js-line-number" data-line-number="1478"></td>
        <td id="LC1478" class="blob-code blob-code-inner js-file-line">			 	}</td>
      </tr>
      <tr>
        <td id="L1479" class="blob-num js-line-number" data-line-number="1479"></td>
        <td id="LC1479" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1480" class="blob-num js-line-number" data-line-number="1480"></td>
        <td id="LC1480" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_removeClass</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">classString</span>) {</td>
      </tr>
      <tr>
        <td id="L1481" class="blob-num js-line-number" data-line-number="1481"></td>
        <td id="LC1481" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> classes <span class="pl-k">=</span> <span class="pl-smi">classString</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1482" class="blob-num js-line-number" data-line-number="1482"></td>
        <td id="LC1482" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> newClasses <span class="pl-k">=</span> <span class="pl-smi">element</span>.<span class="pl-c1">className</span>;</td>
      </tr>
      <tr>
        <td id="L1483" class="blob-num js-line-number" data-line-number="1483"></td>
        <td id="LC1483" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1484" class="blob-num js-line-number" data-line-number="1484"></td>
        <td id="LC1484" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">classes</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1485" class="blob-num js-line-number" data-line-number="1485"></td>
        <td id="LC1485" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> classTag <span class="pl-k">=</span> classes[i];</td>
      </tr>
      <tr>
        <td id="L1486" class="blob-num js-line-number" data-line-number="1486"></td>
        <td id="LC1486" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> regex <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(?:<span class="pl-cce">\\</span>s|^)<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> classTag <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>(?:<span class="pl-cce">\\</span>s|$)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1487" class="blob-num js-line-number" data-line-number="1487"></td>
        <td id="LC1487" class="blob-code blob-code-inner js-file-line">					newClasses <span class="pl-k">=</span> <span class="pl-smi">newClasses</span>.<span class="pl-c1">replace</span>(regex, <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1488" class="blob-num js-line-number" data-line-number="1488"></td>
        <td id="LC1488" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1489" class="blob-num js-line-number" data-line-number="1489"></td>
        <td id="LC1489" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1490" class="blob-num js-line-number" data-line-number="1490"></td>
        <td id="LC1490" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">element</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-smi">newClasses</span>.<span class="pl-en">trim</span>();</td>
      </tr>
      <tr>
        <td id="L1491" class="blob-num js-line-number" data-line-number="1491"></td>
        <td id="LC1491" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1492" class="blob-num js-line-number" data-line-number="1492"></td>
        <td id="LC1492" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_addClass</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">element</span>, <span class="pl-smi">classString</span>) {</td>
      </tr>
      <tr>
        <td id="L1493" class="blob-num js-line-number" data-line-number="1493"></td>
        <td id="LC1493" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> classes <span class="pl-k">=</span> <span class="pl-smi">classString</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1494" class="blob-num js-line-number" data-line-number="1494"></td>
        <td id="LC1494" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> newClasses <span class="pl-k">=</span> <span class="pl-smi">element</span>.<span class="pl-c1">className</span>;</td>
      </tr>
      <tr>
        <td id="L1495" class="blob-num js-line-number" data-line-number="1495"></td>
        <td id="LC1495" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1496" class="blob-num js-line-number" data-line-number="1496"></td>
        <td id="LC1496" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">classes</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L1497" class="blob-num js-line-number" data-line-number="1497"></td>
        <td id="LC1497" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> classTag <span class="pl-k">=</span> classes[i];</td>
      </tr>
      <tr>
        <td id="L1498" class="blob-num js-line-number" data-line-number="1498"></td>
        <td id="LC1498" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> regex <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(?:<span class="pl-cce">\\</span>s|^)<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> classTag <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>(?:<span class="pl-cce">\\</span>s|$)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1499" class="blob-num js-line-number" data-line-number="1499"></td>
        <td id="LC1499" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> ifClassExists <span class="pl-k">=</span> <span class="pl-smi">regex</span>.<span class="pl-c1">test</span>(newClasses);</td>
      </tr>
      <tr>
        <td id="L1500" class="blob-num js-line-number" data-line-number="1500"></td>
        <td id="LC1500" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1501" class="blob-num js-line-number" data-line-number="1501"></td>
        <td id="LC1501" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span>(<span class="pl-k">!</span>ifClassExists) {</td>
      </tr>
      <tr>
        <td id="L1502" class="blob-num js-line-number" data-line-number="1502"></td>
        <td id="LC1502" class="blob-code blob-code-inner js-file-line">						newClasses <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> classTag;</td>
      </tr>
      <tr>
        <td id="L1503" class="blob-num js-line-number" data-line-number="1503"></td>
        <td id="LC1503" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L1504" class="blob-num js-line-number" data-line-number="1504"></td>
        <td id="LC1504" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1505" class="blob-num js-line-number" data-line-number="1505"></td>
        <td id="LC1505" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1506" class="blob-num js-line-number" data-line-number="1506"></td>
        <td id="LC1506" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">element</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-smi">newClasses</span>.<span class="pl-en">trim</span>();</td>
      </tr>
      <tr>
        <td id="L1507" class="blob-num js-line-number" data-line-number="1507"></td>
        <td id="LC1507" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1508" class="blob-num js-line-number" data-line-number="1508"></td>
        <td id="LC1508" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_offsetLeft</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>){</td>
      </tr>
      <tr>
        <td id="L1509" class="blob-num js-line-number" data-line-number="1509"></td>
        <td id="LC1509" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">obj</span>.<span class="pl-en">getBoundingClientRect</span>().<span class="pl-c1">left</span>;</td>
      </tr>
      <tr>
        <td id="L1510" class="blob-num js-line-number" data-line-number="1510"></td>
        <td id="LC1510" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1511" class="blob-num js-line-number" data-line-number="1511"></td>
        <td id="LC1511" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_offsetTop</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>){</td>
      </tr>
      <tr>
        <td id="L1512" class="blob-num js-line-number" data-line-number="1512"></td>
        <td id="LC1512" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> offsetTop <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-smi">offsetTop</span>;</td>
      </tr>
      <tr>
        <td id="L1513" class="blob-num js-line-number" data-line-number="1513"></td>
        <td id="LC1513" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">while</span>((obj <span class="pl-k">=</span> <span class="pl-smi">obj</span>.<span class="pl-smi">offsetParent</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(<span class="pl-smi">obj</span>.<span class="pl-smi">offsetTop</span>)){</td>
      </tr>
      <tr>
        <td id="L1514" class="blob-num js-line-number" data-line-number="1514"></td>
        <td id="LC1514" class="blob-code blob-code-inner js-file-line">					offsetTop <span class="pl-k">+=</span> <span class="pl-smi">obj</span>.<span class="pl-smi">offsetTop</span>;</td>
      </tr>
      <tr>
        <td id="L1515" class="blob-num js-line-number" data-line-number="1515"></td>
        <td id="LC1515" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1516" class="blob-num js-line-number" data-line-number="1516"></td>
        <td id="LC1516" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> offsetTop;</td>
      </tr>
      <tr>
        <td id="L1517" class="blob-num js-line-number" data-line-number="1517"></td>
        <td id="LC1517" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1518" class="blob-num js-line-number" data-line-number="1518"></td>
        <td id="LC1518" class="blob-code blob-code-inner js-file-line">		    <span class="pl-en">_offset</span><span class="pl-k">:</span> <span class="pl-k">function</span> (<span class="pl-smi">obj</span>) {</td>
      </tr>
      <tr>
        <td id="L1519" class="blob-num js-line-number" data-line-number="1519"></td>
        <td id="LC1519" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L1520" class="blob-num js-line-number" data-line-number="1520"></td>
        <td id="LC1520" class="blob-code blob-code-inner js-file-line">					left<span class="pl-k">:</span> <span class="pl-smi">this</span>.<span class="pl-en">_offsetLeft</span>(obj),</td>
      </tr>
      <tr>
        <td id="L1521" class="blob-num js-line-number" data-line-number="1521"></td>
        <td id="LC1521" class="blob-code blob-code-inner js-file-line">					top<span class="pl-k">:</span> <span class="pl-smi">this</span>.<span class="pl-en">_offsetTop</span>(obj)</td>
      </tr>
      <tr>
        <td id="L1522" class="blob-num js-line-number" data-line-number="1522"></td>
        <td id="LC1522" class="blob-code blob-code-inner js-file-line">				};</td>
      </tr>
      <tr>
        <td id="L1523" class="blob-num js-line-number" data-line-number="1523"></td>
        <td id="LC1523" class="blob-code blob-code-inner js-file-line">		    },</td>
      </tr>
      <tr>
        <td id="L1524" class="blob-num js-line-number" data-line-number="1524"></td>
        <td id="LC1524" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_css</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">elementRef</span>, <span class="pl-smi">styleName</span>, <span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1525" class="blob-num js-line-number" data-line-number="1525"></td>
        <td id="LC1525" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> ($) {</td>
      </tr>
      <tr>
        <td id="L1526" class="blob-num js-line-number" data-line-number="1526"></td>
        <td id="LC1526" class="blob-code blob-code-inner js-file-line">                    $.<span class="pl-c1">style</span>(elementRef, styleName, value);</td>
      </tr>
      <tr>
        <td id="L1527" class="blob-num js-line-number" data-line-number="1527"></td>
        <td id="LC1527" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1528" class="blob-num js-line-number" data-line-number="1528"></td>
        <td id="LC1528" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">var</span> style <span class="pl-k">=</span> <span class="pl-smi">styleName</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>-ms-<span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>ms-<span class="pl-pds">&quot;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>-(<span class="pl-c1">[<span class="pl-c1">\d</span><span class="pl-c1">a-z</span>]</span>)<span class="pl-pds">/</span>gi</span>, <span class="pl-k">function</span> (<span class="pl-smi">all</span>, <span class="pl-smi">letter</span>) {</td>
      </tr>
      <tr>
        <td id="L1529" class="blob-num js-line-number" data-line-number="1529"></td>
        <td id="LC1529" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">return</span> <span class="pl-smi">letter</span>.<span class="pl-c1">toUpperCase</span>();</td>
      </tr>
      <tr>
        <td id="L1530" class="blob-num js-line-number" data-line-number="1530"></td>
        <td id="LC1530" class="blob-code blob-code-inner js-file-line">                    });</td>
      </tr>
      <tr>
        <td id="L1531" class="blob-num js-line-number" data-line-number="1531"></td>
        <td id="LC1531" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">elementRef</span>.<span class="pl-c1">style</span>[style] <span class="pl-k">=</span> value;</td>
      </tr>
      <tr>
        <td id="L1532" class="blob-num js-line-number" data-line-number="1532"></td>
        <td id="LC1532" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L1533" class="blob-num js-line-number" data-line-number="1533"></td>
        <td id="LC1533" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1534" class="blob-num js-line-number" data-line-number="1534"></td>
        <td id="LC1534" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_toValue</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">percentage</span>) {</td>
      </tr>
      <tr>
        <td id="L1535" class="blob-num js-line-number" data-line-number="1535"></td>
        <td id="LC1535" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">scale</span>.<span class="pl-smi">toValue</span>.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, [percentage]);</td>
      </tr>
      <tr>
        <td id="L1536" class="blob-num js-line-number" data-line-number="1536"></td>
        <td id="LC1536" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1537" class="blob-num js-line-number" data-line-number="1537"></td>
        <td id="LC1537" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_toPercentage</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L1538" class="blob-num js-line-number" data-line-number="1538"></td>
        <td id="LC1538" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">scale</span>.<span class="pl-smi">toPercentage</span>.<span class="pl-c1">apply</span>(<span class="pl-v">this</span>, [value]);</td>
      </tr>
      <tr>
        <td id="L1539" class="blob-num js-line-number" data-line-number="1539"></td>
        <td id="LC1539" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L1540" class="blob-num js-line-number" data-line-number="1540"></td>
        <td id="LC1540" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">_setTooltipPosition</span><span class="pl-k">:</span> <span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L1541" class="blob-num js-line-number" data-line-number="1541"></td>
        <td id="LC1541" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">var</span> tooltips <span class="pl-k">=</span> [<span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>, <span class="pl-smi">this</span>.<span class="pl-smi">tooltip_min</span>, <span class="pl-smi">this</span>.<span class="pl-smi">tooltip_max</span>];</td>
      </tr>
      <tr>
        <td id="L1542" class="blob-num js-line-number" data-line-number="1542"></td>
        <td id="LC1542" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">orientation</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>vertical<span class="pl-pds">&#39;</span></span>){</td>
      </tr>
      <tr>
        <td id="L1543" class="blob-num js-line-number" data-line-number="1543"></td>
        <td id="LC1543" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> tooltipPos <span class="pl-k">=</span> <span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">tooltip_position</span> <span class="pl-k">||</span> <span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1544" class="blob-num js-line-number" data-line-number="1544"></td>
        <td id="LC1544" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">var</span> oppositeSide <span class="pl-k">=</span> (tooltipPos <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>) <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>right<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>left<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1545" class="blob-num js-line-number" data-line-number="1545"></td>
        <td id="LC1545" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">tooltips</span>.<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">tooltip</span>){</td>
      </tr>
      <tr>
        <td id="L1546" class="blob-num js-line-number" data-line-number="1546"></td>
        <td id="LC1546" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(tooltip, tooltipPos);</td>
      </tr>
      <tr>
        <td id="L1547" class="blob-num js-line-number" data-line-number="1547"></td>
        <td id="LC1547" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">tooltip</span>.<span class="pl-c1">style</span>[oppositeSide] <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>100%<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1548" class="blob-num js-line-number" data-line-number="1548"></td>
        <td id="LC1548" class="blob-code blob-code-inner js-file-line">					}.<span class="pl-en">bind</span>(<span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L1549" class="blob-num js-line-number" data-line-number="1549"></td>
        <td id="LC1549" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-smi">this</span>.<span class="pl-c1">options</span>.<span class="pl-smi">tooltip_position</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L1550" class="blob-num js-line-number" data-line-number="1550"></td>
        <td id="LC1550" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">tooltips</span>.<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">tooltip</span>){</td>
      </tr>
      <tr>
        <td id="L1551" class="blob-num js-line-number" data-line-number="1551"></td>
        <td id="LC1551" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(tooltip, <span class="pl-s"><span class="pl-pds">&#39;</span>bottom<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1552" class="blob-num js-line-number" data-line-number="1552"></td>
        <td id="LC1552" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">tooltip</span>.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-c1">22</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1553" class="blob-num js-line-number" data-line-number="1553"></td>
        <td id="LC1553" class="blob-code blob-code-inner js-file-line">					}.<span class="pl-en">bind</span>(<span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L1554" class="blob-num js-line-number" data-line-number="1554"></td>
        <td id="LC1554" class="blob-code blob-code-inner js-file-line">				} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1555" class="blob-num js-line-number" data-line-number="1555"></td>
        <td id="LC1555" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">tooltips</span>.<span class="pl-en">forEach</span>(<span class="pl-k">function</span>(<span class="pl-smi">tooltip</span>){</td>
      </tr>
      <tr>
        <td id="L1556" class="blob-num js-line-number" data-line-number="1556"></td>
        <td id="LC1556" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">this</span>.<span class="pl-en">_addClass</span>(tooltip, <span class="pl-s"><span class="pl-pds">&#39;</span>top<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L1557" class="blob-num js-line-number" data-line-number="1557"></td>
        <td id="LC1557" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">tooltip</span>.<span class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-k">-</span><span class="pl-smi">this</span>.<span class="pl-smi">tooltip</span>.<span class="pl-c1">outerHeight</span> <span class="pl-k">-</span> <span class="pl-c1">14</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>px<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1558" class="blob-num js-line-number" data-line-number="1558"></td>
        <td id="LC1558" class="blob-code blob-code-inner js-file-line">					}.<span class="pl-en">bind</span>(<span class="pl-v">this</span>));</td>
      </tr>
      <tr>
        <td id="L1559" class="blob-num js-line-number" data-line-number="1559"></td>
        <td id="LC1559" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L1560" class="blob-num js-line-number" data-line-number="1560"></td>
        <td id="LC1560" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L1561" class="blob-num js-line-number" data-line-number="1561"></td>
        <td id="LC1561" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L1562" class="blob-num js-line-number" data-line-number="1562"></td>
        <td id="LC1562" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1563" class="blob-num js-line-number" data-line-number="1563"></td>
        <td id="LC1563" class="blob-code blob-code-inner js-file-line">		<span class="pl-c">/*********************************</span></td>
      </tr>
      <tr>
        <td id="L1564" class="blob-num js-line-number" data-line-number="1564"></td>
        <td id="LC1564" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1565" class="blob-num js-line-number" data-line-number="1565"></td>
        <td id="LC1565" class="blob-code blob-code-inner js-file-line"><span class="pl-c">			Attach to global namespace</span></td>
      </tr>
      <tr>
        <td id="L1566" class="blob-num js-line-number" data-line-number="1566"></td>
        <td id="LC1566" class="blob-code blob-code-inner js-file-line"><span class="pl-c"></span></td>
      </tr>
      <tr>
        <td id="L1567" class="blob-num js-line-number" data-line-number="1567"></td>
        <td id="LC1567" class="blob-code blob-code-inner js-file-line"><span class="pl-c">		*********************************/</span></td>
      </tr>
      <tr>
        <td id="L1568" class="blob-num js-line-number" data-line-number="1568"></td>
        <td id="LC1568" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span>($) {</td>
      </tr>
      <tr>
        <td id="L1569" class="blob-num js-line-number" data-line-number="1569"></td>
        <td id="LC1569" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">var</span> namespace <span class="pl-k">=</span> $.<span class="pl-smi">fn</span>.<span class="pl-smi">slider</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span>bootstrapSlider<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>slider<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L1570" class="blob-num js-line-number" data-line-number="1570"></td>
        <td id="LC1570" class="blob-code blob-code-inner js-file-line">			$.<span class="pl-en">bridget</span>(namespace, Slider);</td>
      </tr>
      <tr>
        <td id="L1571" class="blob-num js-line-number" data-line-number="1571"></td>
        <td id="LC1571" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L1572" class="blob-num js-line-number" data-line-number="1572"></td>
        <td id="LC1572" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1573" class="blob-num js-line-number" data-line-number="1573"></td>
        <td id="LC1573" class="blob-code blob-code-inner js-file-line">	})( $ );</td>
      </tr>
      <tr>
        <td id="L1574" class="blob-num js-line-number" data-line-number="1574"></td>
        <td id="LC1574" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1575" class="blob-num js-line-number" data-line-number="1575"></td>
        <td id="LC1575" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">return</span> Slider;</td>
      </tr>
      <tr>
        <td id="L1576" class="blob-num js-line-number" data-line-number="1576"></td>
        <td id="LC1576" class="blob-code blob-code-inner js-file-line">}));</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.09990s from github-fe141-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-t8lSPZPmzQI1oKi30aaR95CdODTNnJyqexZ0ulCLZEw=" src="https://assets-cdn.github.com/assets/frameworks-b7c9523d93e6cd0235a0a8b7d1a691f7909d3834cd9c9caa7b1674ba508b644c.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-kAer1l3CN2Fyyuv6iZx5HerIU7I8u6ysYWrNpNEvz5Y=" src="https://assets-cdn.github.com/assets/github-9007abd65dc2376172caebfa899c791deac853b23cbbacac616acda4d12fcf96.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

