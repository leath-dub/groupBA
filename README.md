# Our Website for DIME project

This is a repository to store the website for the
our DIME project.

+ index.html holds the main site and sections of the
site our all prefixed with
```html
<section id="NAMEOFSECTION">
```

+ css/main.css holds the main styles for index.html
sections of the styling are prefixed like so
```css
/* -- NAMEOFSECTION -- */
```

+ note about fetching and merging: ( helpful reminders to save headache )
    * ``$ git fetch origin`` -> downloads the current data from remote repo(on github)
    * ``$ git log master..origin/master`` -> lists all commits in remote repo not merged with local branch
    * ``$ git merge origin/master`` -> merge data gotten on fetch with your local branch
    * ``$ git reset --hard HEAD@{1}`` -> reset any of the above merging to your local branch
