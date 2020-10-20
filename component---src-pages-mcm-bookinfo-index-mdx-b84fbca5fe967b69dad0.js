(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{sYl2:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return c})),o.d(t,"default",(function(){return l}));o("91GP"),o("rGqo"),o("yt8O"),o("Btvt"),o("RW0V"),o("q1tI");var n=o("7ljp"),a=o("013z");o("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var c={},i={_frontmatter:c},p=a.a;function l(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,["components"]);return Object(n.b)(p,r({},i,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Subscription to a Helm Repository Channel"),Object(n.b)("p",null,"In this task, you define a ",Object(n.b)("strong",{parentName:"p"},"helm repository subscription channel")," and ",Object(n.b)("strong",{parentName:"p"},"subscribe")," to that ",Object(n.b)("strong",{parentName:"p"},"channel"),". The channel is of type ",Object(n.b)("strong",{parentName:"p"},"HelmRepo"),", meaning that the yaml you create will be deployed and stored in a Helm chart.\nVarious tasks associated are"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Look at the bookinfo application"),Object(n.b)("li",{parentName:"ul"},"Deploy the channel"),Object(n.b)("li",{parentName:"ul"},"Define the helm repo subscription model"),Object(n.b)("li",{parentName:"ul"},"Deploy the subscription"),Object(n.b)("li",{parentName:"ul"},"Check the application")),Object(n.b)("h3",null,"Bookinfo Application"),Object(n.b)("p",null,"You will use bookinfo application to deploy as a helm chart. The application is available as helm chart at ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",r({parentName:"em"},{href:"https://github.com/hybrid-ops/subscription-examples"}),"https://github.com/hybrid-ops/subscription-examples"))," along with the required resource definitions. You will this github as helm repository.\nNavigate to bookinfo folder, ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",r({parentName:"em"},{href:"https://github.com/hybrid-ops/subscription-examples/tree/master/bookinfo"}),"https://github.com/hybrid-ops/subscription-examples/tree/master/bookinfo"))," for the required prerequsites. This folder has three files"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"prereqs.yaml - creates bookinfo namespace and creates the required image policy for bookinfo container"),Object(n.b)("li",{parentName:"ul"},"prereqs-ns.yaml - creates the namespaces bookinfo-entitilement and bookinfo-project for the channel and subscriptions"),Object(n.b)("li",{parentName:"ul"},"ip.yaml - Creates the required image security policy for the the example bookinfo product page.")),Object(n.b)("p",null,"You can copy the files to your local workstation and run the commands"),Object(n.b)("p",null,"Once, you log in to the OpenShift command line of ",Object(n.b)("strong",{parentName:"p"},"MCM Hub"),", run the commands"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc apply -f prereqs.yaml\noc apply -f prereqs-ns.yaml\noc apply -f ip.yaml\n")),Object(n.b)("h3",null,"Create the Channel"),Object(n.b)("p",null,"You will use the file, bookinfo-channel.yaml in ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",r({parentName:"em"},{href:"https://github.com/hybrid-ops/subscription-examples/tree/master/bookinfo-entitlement"}),"https://github.com/hybrid-ops/subscription-examples/tree/master/bookinfo-entitlement"))," to create the required the channel. You can download the file to run locally. This resource file defines the channel for helm repository ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",r({parentName:"strong"},{href:"https://raw.githubusercontent.com/dymaczew/charts/master/repo/incubator/"}),"https://raw.githubusercontent.com/dymaczew/charts/master/repo/incubator/"))),Object(n.b)("p",null,"Log in to the MCM Hub and run the command"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc apply -f bookinfo-channel.yaml\n")),Object(n.b)("p",null,"Check if the channel is created:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc project bookinfo-entitlement\noc get channel\n")),Object(n.b)("p",null,"The output should look equivalent to"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"bookinfo-channel   HelmRepo   https://raw.githubusercontent.com/dymaczew/charts/master/repo/incubator/   122m\n")),Object(n.b)("p",null,"This also can be varified in the console. Click the hambuger icon -> Manage Applications. Then launch the ",Object(n.b)("strong",{parentName:"p"},"Resources")," tab which shows the channel that is just created."),Object(n.b)("img",{src:"/assets/img/cp4mcm/mcm-channel.jpg",alt:"Channel Image"}),Object(n.b)("h3",null,"Create the Subscription"),Object(n.b)("p",null,"You will use the file, bookinfo-app.yaml in ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",r({parentName:"em"},{href:"https://github.com/hybrid-ops/subscription-examples/blob/master/bookinfo-project/bookinfo-app.yaml"}),"https://github.com/hybrid-ops/subscription-examples/blob/master/bookinfo-project/bookinfo-app.yaml"))," to create the required subscription with a placement policy. If you examine the file, you will find  that the placement rule is set to ",Object(n.b)("strong",{parentName:"p"},"environment: Demo"),". So, ensure that label is set on your target cluster where you want the application to deployed to.\nAlso, edit the file to modify the route according to your environment."),Object(n.b)("img",{src:"/assets/img/cp4mcm/mcm-modifyroute.jpg",alt:"Modify Route"}),Object(n.b)("p",null,"After the modification of the route, run the command to deploy the application"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc apply -f bookinfo-app.yaml\n")),Object(n.b)("p",null,"The application should be deployed. You can check if the subscription is propogated"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"oc get appsub --all-namespaces\n")),Object(n.b)("p",null,"The output will look similar to"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"bookinfo-project   bookinfo-subscription   Propagated   141m\n")),Object(n.b)("p",null,"You also can check the console. Click the hambuger icon -> Manage Applications -> Overview\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/cp4mcm/mcm-applications.jpg",alt:"Applications Overview"}))),Object(n.b)("p",null,"Now, click the application bookinfo-app to view the various resources involved with the subscription.\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/cp4mcm/mcm-appdetails.jpg",alt:"Application Details"}))),Object(n.b)("p",null,"Hover over the placement rule to see the placement rule of the application\n",Object(n.b)("img",r({parentName:"p"},{src:"/assets/img/cp4mcm/mcm-appdetails1.jpg",alt:"Placement Rule Visualization"}))),Object(n.b)("p",null,"If you don’t see the application propogated, you may have to check the placement rule and ensure the rule matches to at least one cluster in your environment."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-mcm-bookinfo-index-mdx-b84fbca5fe967b69dad0.js.map