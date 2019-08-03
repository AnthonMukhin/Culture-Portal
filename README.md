## Technical requirements


-   Main page with
	(-)   portal's description
    (+)   'author of the day' block
    (-)   developer team description (userpics + github accounts + nicknames/names), and contribution of each member
-  (-) Navigation - это якоря  или две кнопки авторы  и на главную ??? 
-   Page with a list of authors on the given topic with search widget
    (+)   search should be on the current language with ability to search by name, city/place of birth
    (+)   5-7 authors are enough to complete the task successfully. You can take more, if you have enough time and willingness
-   Page of an author with
    (+)   Author's name
    (-)   Years of life
    (+)   his/her picture
    (+)   biography in the form of timeline (example  [here](https://reactjsexample.com/a-vertical-timeline-component-for-react/))
    (+)   list of artist's works with the date of creation
    (+)   photo gallery with author's picture and pictures of his/her works
    (+)   youtube video about the author / works / period of time author lived. Video must open in a new overlay (modal)
    (+)   place of author's major activity on a map: google / openstreetmap (leaflet) / yandex
    (+)   it's fine if  **not**  every element (timeline, video, photo gallery, map) will be present on every page
(+)   Web portal must be deployed on Github Pages / netlify / google firebase / etc
(+)   Web portal has to be in 3 languages - by, ru, en. Content may vary for each version but interface elements have to be translated. For this purposes you can use this library  [https://www.i18next.com/](https://www.i18next.com/)  or any similar;

(-) Portal should be relatively correctly displayed on tablets and mobile phones.

##### Technical limitations:

(+) You  **should**  develop portal using libraries of visual components such as  **material-ui**  or  **bootstrap**.

(+) You  **should**  use  _Reactjs_  or use  _gatsbyjs_  to get additional points.


## mark calculation:

Mark will be the same for all team members based on the result of presentation.

Maximum points -  **240**

Min scope -  **40**
-   **10**  Main page + page with a list of authors + author's page (only html);
-   **10**  Page with list of authors contains search widget;
-   **20**  Portal has two languages;

Normal scope -  **130**
-   **10**  Author's page contains timeline;
-   **10**  Author's page contains video overlay;
-   **20**  Author's page contains photo gallery;
-   **10**  Author's page contains map (geowidget);
-   **from 10 to 40**  Project is made using react (max 40 - if all widgets are done in React);
-   **from 0 to 20**  Design;
-   **20**  material-ui / bootstrap is used

Extra scope -  **70**
-   **10**  Confidence of the project presentation;
-   **30**  Project is made using gatsbyjs;
-   **20**  contentful / netlify cms is used for content management
-   **10**  Portal has third language;

Fines
-   **-100**  if there are less than 5 commits from each active team member. Everyone should merge their own PRs.
-   up to  **-50**  points for violations  [stage2-tasks-requirements]
-   **-40**  if there is no worklog for team
-   **-20**  too primitive (ugly for 2019) design / UX
