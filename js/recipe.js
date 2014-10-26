var colCount = 0;
var colWidth = 300;
var margin = 10;
var spaceLeft = 0;
var windowWidth = 0;
var blocks = [];
var spaceTop = 60;

var recipe = [
    {
    "image": "<img src=\"http://i3.xiachufang.com/image/620/828d3198ff6e11e39919b8ca3aeed2d7.jpg\">",
    "recipeName": "<h3><a href=\"#modal0\">虾仁芦笋</a></h3>",
    "description": "<p>虾仁牵手芦笋，简单的家常菜，不简单的味道！</p>",
    "tag": [
        {
            "material": "<a class=\"tags\">虾仁</a>"
        },
        {
            "material": "<a class=\"tags\">芦笋</a>"
        }
    ],
    "detailPage_recipeName": "<h2>虾仁芦笋</h2>",
    "materials": "<p>虾仁，芦笋，大蒜，淀粉，盐</p>"
    },

    {
    "image": "<img src=\"http://i4.xiachufang.com/image/620/bfe4fb18012411e4933ce0db5512b208.jpg\">",
    "recipeName": "<h3><a href=\"#modal1\">蜜汁鸡翅</a></h3>",
    "description": "<p>这款无论大人小孩必点菜之一啦，味微甜，可提前腌制更入味!</p>",
    "tag": [
        {
            "material": "<a class=\"tags\">鸡翅</a>"
        },
        {
            "material": "<a class=\"tags\">蜂蜜</a>"
        }
    ],

    "detailPage_recipeName": "<h2>蜜汁鸡翅</h2>",
    "materials": "<p>虾仁，芦笋，大蒜，淀粉，盐</p>"
    },
    {
    "image": "<img src=\"images/qinjiaoxingbaogu.jpg\">",
    "recipeName": "<h3>青椒炒杏鲍菇</h3>",
    "description": "<p>食材简单，适合上班族的快手菜</p>",
    "tag": [
        {
            "material": "<a class=\"tags\">青椒</a>"
        },
        {
            "material": "<a class=\"tags\">杏鲍菇</a>"
        }
    ],
    "detailPage_recipeName": "<h2>青椒炒杏鲍菇</h2>",
    "materials": "<p>虾仁，芦笋，大蒜，淀粉，盐</p>"
    },

    {
    "image": "<img src=\"http://i4.xiachufang.com/image/620/83b5b7dc9f3f11e3b4a6e0db5512b209.jpg\">",
    "recipeName": "<h3>五香煎豆腐</h3>",
    "description": "<p>豆腐入百味，如果你是一个新晋主妇，那么就学学这道菜吧，上手容易，味道浓郁，是白饭的绝搭哦。</p>",
    "tag": [
        {
            "material": "<a class=\"tags\">豆腐</a>"
        }
    ],
    "detailPage_recipeName": "<h2>五香煎豆腐</h2>",
    "materials": "<p>虾仁，芦笋，大蒜，淀粉，盐</p>"
    },

    {
    "image": "<img src=\"images/tangshengcai.jpg\">",
    "recipeName": "<h3>烫生菜</h3>",
    "description": "<p>食材简单，适合上班族的快手菜</p>",
    "tag": [
        {
            "material": "<a class=\"tags\">生菜</a>"
        },
        {
            "material": "<a class=\"tags\">芦笋</a>"
        }
    ],
    "detailPage_recipeName": "<h2>烫生菜</h2>",
    "materials": "<p>虾仁，芦笋，大蒜，淀粉，盐</p>"
    },

    {
    "image": "<img src=\"images/dunjifan.jpg\">",
    "recipeName": "<h3>电饭煲焗鸡饭</h3>",
    "description": "<p>豆腐入百味，如果你是一个新晋主妇，那么就学学这道菜吧，上手容易，味道浓郁，是白饭的绝搭哦。</p>",
    "tag": [
        {
            "material": "<a class=\"tags\">鸡</a>"
        }
    ],
    "detailPage_recipeName": "<h2>电饭煲焗鸡饭</h2>",
    "materials": "<p>虾仁，芦笋，大蒜，淀粉，盐</p>"
    },

    {
    "image": "<img src=\"http://i3.xiachufang.com/image/620/16766b9a15f911e4a4ece0db5512b208.jpg\">",
    "recipeName": "<h3>胡萝卜木耳炒蛋</h3>",
    "description": "<p>食材简单，适合上班族的快手菜</p>",
    "tag": [
        {
            "material": "<a class=\"tags\">胡萝卜</a>"
        },
        {
            "material": "<a class=\"tags\">木耳</a>"
        },
        {
            "material": "<a class=\"tags\">鸡蛋</a>"
        }
    ],
    "detailPage_recipeName": "<h2>胡萝卜木耳炒蛋</h2>",
    "materials": "<p>虾仁，芦笋，大蒜，淀粉，盐</p>"
    },

    {
    "image": "<img src=\"http://i3.xiachufang.com/image/620/1dadaae4081711e49919b8ca3aeed2d7.jpg\">",
    "recipeName": "<h3>西兰花素炒</h3>",
    "description": "<p>食材简单，适合上班族的快手菜</p>",
    "tag": [
        {
            "material": "<a class=\"tags\">西兰花</a>"
        },
        {
            "material": "<a class=\"tags\">木耳</a>"
        },
        {
            "material": "<a class=\"tags\">胡萝卜</a>"
        }
    ],
    "detailPage_recipeName": "<h2>西兰花素炒</h2>",
    "materials": "<p>虾仁，芦笋，大蒜，淀粉，盐</p>"
    },

    {
    "image": "<img src=\"http://i1.xiachufang.com/image/620/d4e40d6cb3ed11e3841cb8ca3aeed2d7.jpg\">",
    "recipeName": "<h3>韩式拌饭</h3>",
    "description": "<p>最家常的韩式拌饭，韩剧里很高的出镜率，每次看到都会被吊起胃口...</p>",
    "tag": [
        {
            "material": "<a class=\"tags\">菠菜</a>"
        },
        {
            "material": "<a class=\"tags\">鸡蛋</a>"
        },
        {
            "material": "<a class=\"tags\">胡萝卜</a>"
        },
        {
            "material": "<a class=\"tags\">莴苣</a>"
        },
        {
            "material": "<a class=\"tags\">黑芝麻</a>"
        },
        {
            "material": "<a class=\"tags\">黄瓜</a>"
        },
        {
            "material": "<a class=\"tags\">火腿肠</a>"
        }
    ],
    "detailPage_recipeName": "<h2>韩式拌饭</h2>",
    "materials": "<p>虾仁，芦笋，大蒜，淀粉，盐</p>"
    },

    {
    "image": "<img src=\"http://i2.xiachufang.com/image/620/4fb22adc08a911e49919b8ca3aeed2d7.jpg\">",
    "recipeName": "<h3>清蒸鲈鱼</h3>",
    "description": "<p>超入味的清蒸鱼，健康美味</p>",
    "tag": [
        {
            "material": "<a class=\"tags\">鲈鱼</a>"
        }
    ],
    "detailPage_recipeName": "<h2>清蒸鲈鱼</h2>",
    "materials": "<p>虾仁，芦笋，大蒜，淀粉，盐</p>"
    },

    {
    "image": "<img src=\"http://i2.xiachufang.com/image/620/fe70a2b49ec911e38844b8ca3aeed2d7.jpg\">",
    "recipeName": "<h3>麻婆豆腐</h3>",
    "description": "<p>最下饭的传统川菜</p>",
    "tag": [
        {
            "material": "<a class=\"tags\">豆腐</a>"
        }
    ],
    "detailPage_recipeName": "<h2>麻婆豆腐</h2>",
    "materials": "<p>虾仁，芦笋，大蒜，淀粉，盐</p>"
    }

];

$( document ).ready(function() {

        for(var i = 0; i < recipe.length; i++) {
            
            var tagString = "";
            for(var j = 0; j < recipe[i].tag.length; j++) {
                tagString += recipe[i].tag[j].material;
            }
            $("<div />", { "class":"block", id:"div"+i })
            .append(recipe[i].image + recipe[i].recipeName + recipe[i].description + tagString)
            .appendTo('body');
            $("<a />", { "class":"overlay", id:"modal"+i  }).appendTo('body');
            $("<div />", { "class":"popup"}).append(recipe[i].detailPage_recipeName + recipe[i].materials).appendTo('body');
            $("<a />", { "class":"close"}).appendTo('body');

        }
        
    });

$(function() {
    $(window).resize(setupBlocks);
});

function setupBlocks() {
    windowWidth = $(window).width();
    blocks = [];

    // Calculate the margin so the blocks are evenly spaced within the window
    colCount = Math.floor(windowWidth / (colWidth + margin * 2));
    spaceLeft = (windowWidth - ((colWidth * colCount) + (margin * (colCount - 1)))) / 2;
    console.log(spaceLeft);

    for (var i = 0; i < colCount; i++) {
        blocks.push(margin);
    }
    positionBlocks();
}

function positionBlocks() {
    $('.block').each(function(i) {
        var min = Array.min(blocks);
        var index = $.inArray(min, blocks);
        var leftPos = margin + (index * (colWidth + margin));
        $(this).css({
            'left': (leftPos + spaceLeft) + 'px',
            'top': (min + spaceTop) + 'px'
        });
        blocks[index] = min + $(this).outerHeight() + margin;
    });
}

// Function to get the Min value in Array
Array.min = function(array) {
    return Math.min.apply(Math, array);
};