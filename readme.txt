gulp build files/folders:

node_modules/
gulpfile.js
package.json 

Front end themes:

catalog/view/theme/
 |_ cjt-orange
 |_ cjt-orange-nocart
 |_ default

Before build:

* Specify the name of the folder that would contain the resulting file structure in gulpfile.js.

After build:

* Modify the corresponding entries in the following files to match the production folder name:
   * .htaccess
   * config.php
   * admin/config.php