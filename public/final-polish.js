const makeRandom=()=>{
  if(globalThis.crypto?.getRandomValues){
    const seed=new Uint32Array(1);crypto.getRandomValues(seed);let a=seed[0]||0x9e3779b9;
    return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
  }
  return Math.random;
};

const inFinder=(r,c)=>(r<3&&c<3)||(r<3&&c>5)||(r>5&&c<3);
const inFinderQuiet=(r,c)=>(r<4&&c<4)||(r<4&&c>4)||(r>4&&c<4);

function generateMintCard(grid){
  if(!grid||grid.dataset.qrixGenerated==='true')return;
  const cells=[...grid.children];
  if(cells.length!==81)return;

  const random=makeRandom();
  cells.forEach((cell,index)=>{
    const r=Math.floor(index/9),c=index%9;
    let on=false;
    if(inFinder(r,c))on=true;
    else if(inFinderQuiet(r,c))on=false;
    else if(r===4||c===4)on=(r+c)%2===0;
    else on=random()>.53;
    cell.classList.toggle('on',on);
  });

  const card=grid.closest('.mint-card');
  if(card){
    const direction=random()>.5?1:-1;
    card.style.setProperty('--mint-tilt',`${(direction*(3.2+random()*2.5)).toFixed(2)}deg`);
    card.style.setProperty('--mint-lift',`${(9+random()*5).toFixed(1)}px`);
    card.style.setProperty('--mint-speed',`${(4.7+random()*1.8).toFixed(2)}s`);
    card.style.setProperty('--mint-radius',`${(8.2+random()*1.8).toFixed(2)}%`);
    card.style.setProperty('--mint-cell-radius',`${(.5+random()*1.7).toFixed(2)}px`);
    card.dataset.qrixGenerated='true';
  }
  grid.dataset.qrixGenerated='true';
}

function enhance(root=document){
  if(root?.matches?.('.mini-qr'))generateMintCard(root);
  root?.querySelectorAll?.('.mint-card .mini-qr').forEach(generateMintCard);
}

enhance();
const root=document.getElementById('root')||document.body;
const observer=new MutationObserver(mutations=>{
  for(const mutation of mutations){
    for(const node of mutation.addedNodes){
      if(node.nodeType===1)enhance(node);
    }
  }
});
observer.observe(root,{childList:true,subtree:true});
