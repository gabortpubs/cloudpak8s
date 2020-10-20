(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"j/Cm":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p={},b={_frontmatter:p},l=o.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(l,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"OpenShift Container Platform (OCP) 4 upgrade paths"),Object(n.b)("p",null,"In Red Hat Knowledgebase, there is an article which talk about the OCP upgrade paths.",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("a",r({parentName:"p"},{href:"https://access.redhat.com/solutions/4583231"}),"OpenShift Container Platform (OCP) 4 upgrade paths: 4583231")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Issue:",Object(n.b)("br",{parentName:"p"}),"\n","What are the upgrade paths in OpenShift 4?",Object(n.b)("br",{parentName:"p"}),"\n","How to upgrade to the next minor version of OpenShift 4?")),Object(n.b)("p",null,"In this document, we will demonstrate how you can find out the upgrade paths based on the knowledgebase information."),Object(n.b)("h2",null,"Preparation"),Object(n.b)("p",null,"Before we dive into deeper, we will talk about preparation you need to do.",Object(n.b)("br",{parentName:"p"}),"\n","To follow the instructions in the knowledgebase, there are several tools we need to install on our environment.",Object(n.b)("br",{parentName:"p"}),"\n","For this demonstration, we use macOS Catalina 10.15.4 on our laptop.",Object(n.b)("br",{parentName:"p"}),"\n","Here are the commands we needed to install on our macOS."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"jq"),Object(n.b)("li",{parentName:"ul"},"dot"),Object(n.b)("li",{parentName:"ul"},"graph.sh")),Object(n.b)("p",null,"We also needed to install ",Object(n.b)("inlineCode",{parentName:"p"},"brew")," command to install ",Object(n.b)("inlineCode",{parentName:"p"},"jq")," and ",Object(n.b)("inlineCode",{parentName:"p"},"dot")," commands"),Object(n.b)("p",null,"Here is the commands we executed to install ",Object(n.b)("inlineCode",{parentName:"p"},"brew")," command."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n')),Object(n.b)("p",null,"Once we successfully installed the brew command (a.k.a. Homebrew), then we installed the ",Object(n.b)("inlineCode",{parentName:"p"},"jq")," command."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"brew install jq\n")),Object(n.b)("p",null,"Then, we installed ",Object(n.b)("inlineCode",{parentName:"p"},"dot")," command.  Note that the graphviz includes the ",Object(n.b)("inlineCode",{parentName:"p"},"dot")," command."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"brew install graphviz\n")),Object(n.b)("p",null,"One more thing we needed to installed is that the ",Object(n.b)("inlineCode",{parentName:"p"},"graph.sh"),"."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"First, download the available graph.sh file: ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/openshift/cincinnati/blob/master/hack/graph.sh"}),"https://github.com/openshift/cincinnati/blob/master/hack/graph.sh"))),Object(n.b)("p",null,"Now, we got everything we need to follow the instructions in the knowledgebase."),Object(n.b)("h2",null,"Listing the available upgrade paths"),Object(n.b)("p",null,"In the knowledgebase, there are two ways to find out the upgrade paths introduced.  "),Object(n.b)("h2",null,"Listing upgrade paths with a text"),Object(n.b)("p",null,"The upgrade path from a current version to the next available version can be found by using curl command."),Object(n.b)("p",null,"We will export the CURRENT_VERSION and CHANNEL_NAME variables before we execute the curl command as follow."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kenueno@kenuenoMacBook-Pro OCP4_upgrade_paths % export CURRENT_VERSION=4.3.12\nkenueno@kenuenoMacBook-Pro OCP4_upgrade_paths % export CHANNEL_NAME=stable-4.4\n")),Object(n.b)("p",null,"I the above example, we specified “4.3.12” as our current OCP cluster version.",Object(n.b)("br",{parentName:"p"}),"\n","Then, we specified “stable-4.4” channel for the target version.  "),Object(n.b)("p",null,"Now, we are ready to run the curl command as follow.  "),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),'kenueno@kenuenoMacBook-Pro OCP4_upgrade_paths % curl -sH \'Accept:application/json\' "https://api.openshift.com/api/upgrades_info/v1/graph?channel=${CHANNEL_NAME}" | jq -r --arg CURRENT_VERSION "${CURRENT_VERSION}" \'. as $graph | $graph.nodes | map(.version==\'\\"$CURRENT_VERSION\\"\') | index(true) as $orig | $graph.edges | map(select(.[0] == $orig)[1]) | map($graph.nodes[.].version) | sort_by(.)\'\n[\n  "4.3.13",\n  "4.3.18",\n  "4.3.19",\n  "4.3.21"\n]\nkenueno@kenuenoMacBook-Pro OCP4_upgrade_paths %\n')),Object(n.b)("p",null,"In our case, the upgrade paths from “4.3.12” to “4.4” are “4.3.13”, “4.3.18”, “4.3.19” and “4.3.21” as shown above."),Object(n.b)("p",null,"Note that we used the ",Object(n.b)("inlineCode",{parentName:"p"},"jq")," command since it can easily extract values from JSON, aggregate them, and display them after formatting.  "),Object(n.b)("h2",null,"Listing upgrade paths with a dot graph"),Object(n.b)("p",null,"There is a way to show the upgrade paths with a ",Object(n.b)("inlineCode",{parentName:"p"},"dot")," grap.",Object(n.b)("br",{parentName:"p"}),"\n","A ",Object(n.b)("inlineCode",{parentName:"p"},"dot")," graph can be generated which may make it easier to understand the available upgrade paths.  "),Object(n.b)("p",null,"We also use the curl command and it will pipe the output to the ",Object(n.b)("inlineCode",{parentName:"p"},"graph.sh")," script, then pipe to the ",Object(n.b)("inlineCode",{parentName:"p"},"dot")," command to generate a graph as follow."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kenueno@kenuenoMacBook-Pro OCP4_upgrade_paths % curl -sH 'Accept:application/json' 'https://api.openshift.com/api/upgrades_info/v1/graph?channel=fast-4.4&arch=amd64' | ./graph.sh | dot -Tsvg > graph.svg\nkenueno@kenuenoMacBook-Pro OCP4_upgrade_paths % \n")),Object(n.b)("p",null,"Once the commands generated the graph, in our example above, it is called ",Object(n.b)("strong",{parentName:"p"},"graph.svg"),", we can take a look at the graph via a Web browser such as Safari, Chrome and Firefox as follow.  "),Object(n.b)("p",null,Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"94.09722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAABYlAAAWJQFJUiTwAAABkklEQVQ4y5WU246CQAyGef9n80ZvTIyJUYcVBUEFPABS/bopQbOuTJNmJiPz8x+KQZ4XUhSlxHEiaZpJXTdyPB5ls9nIer2WMPx5dqj733a6Ouf0nNW5UM/jOJagaRq53+/CWtf1c9/qfreLZbvdyuVykdvt9tJVVemz7K/Xa7dyHsgfdTgcZDwey2g0kizLxKeCtm3Fmjqfzyo5TVOVsN/v9e1U/9lPHRgQVZal0gdkuVyqR4BzjhwD/cqQwiuYsBLIdDqVxWKhYPgFc3v2P1D1kAt5nmsjFYYAUcim+W0wIG8vikIDmEwmMp/P5XQ6afqAw5ig+j5+BORSkiTqFf4xV7PZrGNIMUZYMQgQOQyqMeAiYDYu2AH7IXIVEG+YNxIlSS5bsoTE+g72VTJBIAtWNKw5M9ZDwRQQiTCDDc2oYAG+4qkPmALat0nSNGBRFCk4rIcE8QLIJXxDJgmzt0H2Beu+FGYOiavVSgMBtM/O68/BRgNGgMK0z84XtPuW8RHv8NCG2ldux9AuEcS7XF/AB0/kzfPlw2C8AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ocp44_upgrade_path",title:"ocp44_upgrade_path",src:"/static/9cdcbb49b298a3e89210f88ba085cf5d/3cbba/ocp44_upgrade_path.png",srcSet:["/static/9cdcbb49b298a3e89210f88ba085cf5d/7fc1e/ocp44_upgrade_path.png 288w","/static/9cdcbb49b298a3e89210f88ba085cf5d/a5df1/ocp44_upgrade_path.png 576w","/static/9cdcbb49b298a3e89210f88ba085cf5d/3cbba/ocp44_upgrade_path.png 1152w","/static/9cdcbb49b298a3e89210f88ba085cf5d/5f2e6/ocp44_upgrade_path.png 1478w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," "),Object(n.b)("p",null,"The above output is for the stable-4.4 channel as of 2020-05-27.",Object(n.b)("br",{parentName:"p"}),"\n","Note that this output will most likely change at later dates, and is shown for demonstration purposes only."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-day-2-upgrade-upgrade-paths-index-mdx-12475a932aecea2ae05d.js.map