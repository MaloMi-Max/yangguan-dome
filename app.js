(function(){
  var views = Array.prototype.slice.call(document.querySelectorAll('.view'));
  var dots = document.getElementById('dots');
  var counter = document.getElementById('counter');
  var idx = 0;

  views.forEach(function(v,i){
    var d=document.createElement('div');
    d.className='dot'+(i===0?' on':'');
    d.addEventListener('click',function(){go(i)});
    dots.appendChild(d);
  });
  var dotEls=Array.prototype.slice.call(dots.children);

  function pad(n){return (n<10?'0':'')+n}
  function render(){
    views.forEach(function(v,i){v.classList.toggle('active',i===idx);});
    dotEls.forEach(function(d,i){d.classList.toggle('on',i===idx);});
    counter.textContent=pad(idx+1)+' / '+pad(views.length);
    var v=views[idx];
    v.classList.remove('entering');void v.offsetWidth;v.classList.add('entering');
    if(location.hash!=='#'+idx){history.replaceState(null,'','#'+idx);}
  }
  function go(i){
    idx=Math.max(0,Math.min(views.length-1,i));
    render();
  }
  document.getElementById('prev').addEventListener('click',function(){go(idx-1)});
  document.getElementById('next').addEventListener('click',function(){go(idx+1)});

  /* ===== 工具子链接面板 ===== */
  var TOOLS={
    spatgris:{
      name:'SpatGRIS',
      dir:'对应方向 ⑤ 多模态协同',
      desc:'面向穹顶与厅堂的实时多声道声音空间化服务器，最多 256 路声源 × 256 路扬声器，是 Suite SAT 的声音基座。',
      img:'https://toolbox.sat.qc.ca/images/tools/spatgris.poster.webp',
      imgAlt:'SpatGRIS 空间音频界面',
      facts:[
        '五种空间化模式：DOME（VBAP 球面）、CUBE（MBAP 非球面）、HYBRID 混合、BINAURAL（HRTF 耳机监听）、STEREO',
        '声源轨迹与位置由 OSC 驱动；ControlGRIS 插件可在 DAW 内直接编排声轨运动轨迹',
        'GRIS（蒙特利尔大学空间沉浸研究组）× SAT 联合开发，GPLv3 / LGPLv3，Windows / macOS / Linux'
      ],
      links:[
        {label:'GitHub 仓库',href:'https://github.com/GRIS-UdeM/SpatGRIS'},
        {label:'GRIS 官网',href:'https://gris.musique.umontreal.ca/'}
      ]
    },
    spm:{
      name:'Spatial Protocol Mapper',
      dir:'对应方向 ③ 交互总线',
      desc:'空间音频软件之间的 OSC 实时翻译与路由总线：一套创作工具驱动多套回放系统。',
      img:'https://toolbox.sat.qc.ca/images/tools/spatial-protocol-mapper.webp',
      imgAlt:'Spatial Protocol Mapper 工作界面',
      facts:[
        '一路 OSC 输入，翻译后并行发往一个或多个空间化器，多目的地下发',
        '兼容 SpatGRIS、ADM-OSC、Spat Revolution 等主流空间音频协议',
        'Suite SAT Creator 订阅档，Windows / Linux；源码随订阅版本分发'
      ],
      links:[
        {label:'Suite SAT 工具页',href:'https://toolbox.sat.qc.ca/en/tools/tier/creator/'}
      ]
    },
    livepose:{
      name:'LivePose',
      dir:'对应方向 ③④ 交互与在场感',
      desc:'本地运行的人体姿态 / 目标检测命令行工具，把骨架与动作数据通过网络发给沉浸式场景，无需云端推理。',
      img:'https://toolbox.sat.qc.ca/images/tools/livepose.poster.webp',
      imgAlt:'LivePose 姿态检测界面',
      facts:[
        'RGB / 灰度视频流本地 ONNX / DNN 推理，20–30 FPS 实时输出',
        '滤镜覆盖抬臂、跳跃、平面投影、虚拟化身控制等；可自定义检测与筛选链路',
        'OSC + Websocket 双网络输出；AGPLv3 / 商业双授权'
      ],
      links:[
        {label:'官方文档站',href:'https://sat-mtl.github.io/livepose/'},
        {label:'GitHub 仓库',href:'https://github.com/sat-mtl/livepose'}
      ],
      note:'文档站首页附有工具演示影片（QuickTime 格式，建议在文档站内播放）。'
    },
    koaia:{
      name:'Koaia',
      dir:'对应方向 ② 实时生成段',
      desc:'面向舞台现场的实时 AI 图像生成工具，支持多模型接入与图层混合，为演出提供即时视觉素材。',
      img:'https://media.doubao.com/space/api/box/stream/download/all_by_mount_point/JIZobvcMcofSSOxlYqrcO3z3nye',
      imgAlt:'Koaia 实时 AI 图像生成界面',
      facts:[
        '现场演出语境下的实时出图，多模型接入与图层叠加混合',
        '作为工坊方向②「AI 球面生成一致性」在实时生成段的参照工具',
        'Suite SAT Creator 档；官方站点提供在线说明与演示影片'
      ],
      links:[
        {label:'官方站点',href:'https://sat-mtl.github.io/koaia/'}
      ],
      note:'官方演示影片为 QuickTime 格式、体积较大，请在文档站首页播放。'
    },
    carto:{
      name:'Carto',
      dir:'对应方向 ④ 集体交互',
      desc:'多深度相机 + LiDAR 的点云标定与实时融合工具，把多个体感设备拼成统一的空间地图，支撑百人级群体跟踪。',
      imgs:[
        {src:'https://media.doubao.com/space/api/box/stream/download/all_by_mount_point/XbgbbjIg5obBAixIR5ecnhR4nOg',alt:'Carto 标定与融合界面'},
        {src:'https://media.doubao.com/space/api/box/stream/download/all_by_mount_point/WN02bTyaToMchPxfd1McfZ17ncc',alt:'Carto 现场点云跟踪效果（Photo: Camille Gladu-Drouin）'}
      ],
      facts:[
        '多传感器标定 + 实时点云融合，可配置 Inclusion / Crop 裁切区域',
        '融合点云以正交视图或原始数据形式实时输出到其他软件',
        'Professional 档，Windows / Linux；是工坊方向④集体在场感实证的硬件参照'
      ],
      links:[
        {label:'官方文档',href:'https://sat-mtl.github.io/Carto/en/index.html'},
        {label:'GitHub 仓库',href:'https://github.com/sat-mtl/carto'}
      ]
    },
    domeport:{
      name:'Domeport',
      dir:'教学与预演工具',
      desc:'穹顶内容预演器：把成片或实时信号投到 3D 穹顶模型上，订场地之前先在电脑里检查球面构图与效果。',
      video:'https://sat-mtl.github.io/DomeportPro/images/domeport.mp4',
      poster:'https://toolbox.sat.qc.ca/images/tools/domeport-web.poster.webp',
      facts:[
        '支持 DomeMaster 与等距柱状（equirectangular）文件审片',
        'Native 版可接入 NDI / Spout / Syphon 实时信号，低延迟、多穹顶格式',
        'Web 版浏览器免安装；与本工坊 SceneForge 预演系统同属「先预演、后排片」环节'
      ],
      links:[
        {label:'在线 Web 版',href:'https://domeport.sat.qc.ca'},
        {label:'Native 版文档',href:'https://sat-mtl.github.io/DomeportPro/'}
      ]
    }
  };

  var panel=document.getElementById('toolpanel');
  var tpName=document.getElementById('tpName'),tpDir=document.getElementById('tpDir'),
      tpMedia=document.getElementById('tpMedia'),tpDesc=document.getElementById('tpDesc'),
      tpFacts=document.getElementById('tpFacts'),tpLinks=document.getElementById('tpLinks'),
      tpNote=document.getElementById('tpNote');
  var panelOpen=false;

  function esc(s){return String(s).replace(/[&<>\x22]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','\x22':'&quot;'}[c]})}

  function openTool(id){
    var t=TOOLS[id];if(!t)return;
    tpName.textContent=t.name;
    tpDir.textContent=t.dir;
    tpDesc.textContent=t.desc;
    tpFacts.innerHTML=t.facts.map(function(f){return '<li>'+esc(f)+'</li>'}).join('');
    if(t.video){
      tpMedia.className='tp-media';
      tpMedia.innerHTML='<video src="'+t.video+'" poster="'+(t.poster||'')+'" autoplay loop muted controls playsinline></video>';
    }else if(t.imgs){
      tpMedia.className='tp-media two';
      tpMedia.innerHTML=t.imgs.map(function(i){return '<img src="'+i.src+'" alt="'+esc(i.alt)+'">'}).join('');
    }else{
      tpMedia.className='tp-media';
      tpMedia.innerHTML='<img src="'+t.img+'" alt="'+esc(t.imgAlt)+'">';
    }
    tpLinks.innerHTML=t.links.map(function(l){
      return '<a class="ext-btn" href="'+l.href+'" target="_blank" rel="noopener noreferrer">'+esc(l.label)+' ↗</a>';
    }).join('');
    tpNote.textContent=t.note||'';
    tpNote.style.display=t.note?'':'none';
    panel.classList.add('open');panelOpen=true;
  }
  function closePanel(){panel.classList.remove('open');panelOpen=false}

  document.getElementById('toolmap').addEventListener('click',function(e){
    var card=e.target.closest('.tool');if(card)openTool(card.dataset.tool);
  });
  document.getElementById('toolmap').addEventListener('keydown',function(e){
    var card=e.target.closest('.tool');
    if(card&&(e.key==='Enter'||e.key===' ')){e.preventDefault();openTool(card.dataset.tool);}
  });
  document.getElementById('tpBack').addEventListener('click',closePanel);

  document.addEventListener('keydown',function(e){
    if(panelOpen){
      if(e.key==='Escape')closePanel();
      return;
    }
    if(e.key==='ArrowRight'||e.key==='PageDown')go(idx+1);
    if(e.key==='ArrowLeft'||e.key==='PageUp')go(idx-1);
  });
  var h=parseInt(location.hash.replace('#',''),10);
  if(!isNaN(h)&&h>=0&&h<views.length)idx=h;
  render();
})();
