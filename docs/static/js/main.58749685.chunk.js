(window.webpackJsonpadd=window.webpackJsonpadd||[]).push([[0],{273:function(t,e,a){t.exports=a.p+"static/media/head.cfed5fd0.png"},288:function(t,e,a){t.exports=a(679)},293:function(t,e,a){},604:function(t,e,a){},679:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(4),i=a.n(s),c=(a(293),a(294),a(16)),l=(a(296),a(285)),r=(a(298),a(45)),u=(a(300),a(141)),d=(a(302),a(53)),m=(a(143),a(25)),p=(a(305),a(26)),h=(a(306),a(286)),f=(a(308),a(24)),g=a(59),y=(a(185),a(100)),v=(a(311),a(284)),w=(a(313),a(283)),E=a(32),S=a(60),b=a(87),I=a(88),A=(a(315),a(102)),O=(a(317),a(276)),x=(a(319),a(89)),R=(a(321),a(104)),F=a(137),_=(a(531),a(184)),C=(a(682),a(183)),T=a(138),k=a.n(T),P="http://127.0.0.1:2345/",B=function(){function t(){Object(E.a)(this,t)}return Object(S.a)(t,[{key:"post",value:function(t,e,a,n){var o={base:{timestamp:1234567,sign:"67ff54447b89f06fe4408b89902e585167abad291ec41118167017925e24e320"},biz:e,page:a};k.a.post(P+t,o).then((function(t){var e=t.data;n&&n(e)})).catch((function(t){}))}},{key:"postSeroRpc",value:function(t,e,a){var n={id:0,jsonrpc:"2.0",method:t,params:e};k.a.post(P+"rpc",n).then((function(t){var e=t.data;a&&a(e)})).catch((function(t){console.log("req error: ",t)}))}},{key:"postPullupRpc",value:function(t,e,a){var n={id:0,method:t,params:e};k.a.post(P+"pullup_rpc",n).then((function(t){var e=t.data;a&&a(e)})).catch((function(t){}))}}]),t}(),M=a(52),N=a.n(M),D=function t(){Object(E.a)(this,t),this.address="14BgPoAHpzTon6VbJcUWqghspF1GWDjcNkEf3SxaJsC66EEsxDs2BVYVWzDiYWtqZ3cFCktKZddc6mZTe8gUuFv",this.abi=[{constant:!1,inputs:[{name:"refereeCode",type:"string"}],name:"invest",outputs:[{name:"",type:"bool"}],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"detailsOfIncome",outputs:[{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"triggerStaticProfit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"setMarketAddr",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"details",outputs:[{name:"",type:"string"},{name:"",type:"string"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint8"},{name:"",type:"bool"},{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdrawBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"}],name:"registerNode",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"calcuStaticProfit",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"id",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"balanceOfSero",outputs:[{name:"amount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"code",type:"string"}],name:"codeExist",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_triggerStaticNum",type:"uint256"}],name:"setTriggerStaticNum",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_marketAddr",type:"address"},{name:"_codeServiceAddr",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"}],this.dapp={name:"add",contractAddress:"14BgPoAHpzTon6VbJcUWqghspF1GWDjcNkEf3SxaJsC66EEsxDs2BVYVWzDiYWtqZ3cFCktKZddc6mZTe8gUuFv",github:"https://github.com/add-plus/",author:"add-plus",url:document.location.href,logo:document.location.protocol+"//"+document.location.host+"/add/logo.png"}},j="",L=(new B,C.a.Option),W=new D,V=(window.location.host,function(t){Object(I.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(E.a)(this,a),(n=e.call(this,t)).handleOk=function(t){var e=Object(g.a)(n);if(""!==j){var a,o=e.state.accounts,s=Object(_.a)(o);try{for(s.s();!(a=s.n()).done;){var i=a.value;i.MainPKr===j&&e.props.selectAccount(i)}}catch(c){s.e(c)}finally{s.f()}}e.props.hiddenAccount()},n.handleCancel=function(t){Object(g.a)(n).props.hiddenAccount()},n.onChange=function(t){j=t},n.state={accountOptions:[],accounts:[]},n}return Object(S.a)(a,[{key:"componentDidMount",value:function(){var t=this;N.a.init(W.dapp,(function(e){e&&t.getAccounts()}))}},{key:"formatPK",value:function(t){return t.slice(0,10)+"...."+t.slice(-10)}},{key:"getAccounts",value:function(){var t=this;N.a.getAccountList((function(e){if(e){var a,n=e,s=0,i=[],c=Object(_.a)(n);try{for(c.s();!(a=c.n()).done;){var l=a.value,r=l.Name;s++,r||(r="Account"+s),i.push(o.a.createElement(L,{value:l.MainPKr,key:s},r+" "+t.formatPK(l.PK)))}}catch(u){c.e(u)}finally{c.f()}t.setState({accountOptions:i,accounts:n})}}))}},{key:"render",value:function(){var t=this;return o.a.createElement(y.a,{title:"Select Account",visible:this.props.visible,onOk:this.handleOk,onCancel:this.handleCancel},o.a.createElement(C.a,{showSearch:!0,style:{width:"98%"},placeholder:"Select an account",onChange:function(e){t.onChange(e)}},this.state.accountOptions))}}]),a}(n.Component)),K=a(10),z=a.n(K),q=a(269),H=a.n(q),J=(a(604),a(270)),U=a.n(J),Y=a(271),Z=a.n(Y),G=a(282),X=a(103),$=function t(){Object(E.a)(this,t),this.zh_CN={project:{title:"\u5408\u7ea6\u8be6\u60c5",contractAddress:"\u5408\u7ea6\u5730\u5740",balanceSero:"\u5f53\u524d\u4f59\u989d (SERO)"},account:{title:{utxo:"\u94b1\u5305\u8d26\u6237",contract:"\u5408\u7ea6\u8d26\u6237",swith:"\u5207\u6362\u8d26\u6237",balanceSero:"\u4f59\u989d (SERO)",estimatedTotal:"\u9884\u8ba1\u603b\u6536\u76ca (SERO)",dayIncome:"\u5f53\u5929\u8fd4\u8fd8\u6bd4\u4f8b",staticIncome:"\u5f53\u5929\u9759\u6001\u8fd4\u8fd8 (SERO)",withdraw:"\u53ef\u63d0\u73b0\u91d1\u989d (SERO)",detail:"\u8be6\u60c5",id:"\u7f16\u53f7",referId:"\u63a8\u8350\u4eba\u7f16\u53f7",areaId:"\u5927\u533a\u7f16\u53f7",totalInvest:"\u672c\u91d1",profitLevel:"\u6536\u76ca\u500d\u6570",latestTime:"\u6700\u65b0\u6536\u76ca\u65f6\u95f4",totalReturn:"\u5f53\u524d\u8fd4\u8fd8\u603b\u6570(SERO)",totalReturnDay:"\u5f53\u5929\u8fd4\u8fd8\u603b\u6570(SERO)",recommend:"\u4e0b\u7ea7\u4eba\u6570",staticIncomeTips:"\u4eca\u5929\u7684\u9759\u6001\u6536\u76ca\u5df2\u7ecf\u652f\u4ed8\u5230\u53ef\u63d0\u73b0\u8d26\u6237.",staticIncomeTips2:"\u89e6\u53d1\u6536\u76ca\u5230\u63d0\u73b0\u8d26\u6237.",investDetail:"\u6295\u8d44\u8be6\u60c5",myIncome:"\u6211\u7684\u4e1a\u7ee9",areaTotal:"\u5927\u533a\u4e1a\u7ee9",areaOtherTotal:"\u4e1a\u7ee9\u603b\u548c(\u4e0d\u542b\u5927\u533a)",staticReward:"\u9759\u6001\u8fd4\u8fd8",recommendReward:"\u63a8\u8350\u5956",nobilityReward:"\u661f\u7ea7\u5956",vipReward:"VIP\u5956",viewCode:"\u67e5\u770b\u667a\u80fd\u5408\u7ea6"},button:{deposit:"\u5145\u503c",invest:"\u6295\u8d44",trigger:"\u89e6\u53d1\u6536\u76ca",withdraw:"\u63d0\u73b0",close:"\u5173\u95ed",copy:"\u62f7\u8d1d"},modal:{deposit:{title:"\u5145\u503c",copy:"\u62f7\u8d1d"},invest:{title:"\u6295\u8d44",referId:"\u63a8\u8350\u4eba\u7f16\u53f7",amount:"\u6295\u8d44\u91d1\u989d",amountTips:"10 SERO\u8d77\u6295",availableSERO:"\u53ef\u7528\u7684\u4f59\u989d",total:"\u5e94\u4ed8\u5408\u8ba1",estimate:"\u9884\u8ba1\u6536\u76ca",password:"\u8d26\u6237\u5bc6\u7801",passwordPlace:"\u8f93\u5165\u8d26\u6237\u5bc6\u7801"},trigger:{password:"\u8d26\u6237\u5bc6\u7801",passwordPlace:"\u8f93\u5165\u8d26\u6237\u5bc6\u7801"},withdraw:{password:"\u8d26\u6237\u5bc6\u7801",passwordPlace:"\u8f93\u5165\u8d26\u6237\u5bc6\u7801",tips:"* \u63d0\u73b0\u91d1\u989d\u5c06\u76f4\u63a5\u63d0\u5230UTXO\u8d26\u6237."}}},toast:{lessAmount:"SERO\u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8\u672c\u6b21\u4ea4\u6613.",minInvest:"\u6700\u5c0f\u6295\u8d44\u91d1\u989d\u4e3a 10 SERO.",tx:"\u4ea4\u6613\u63d0\u4ea4\u6210\u529f, \u7b49\u5f85\u533a\u5757\u6253\u5305\u4ea4\u6613, \u4ea4\u6613\u54c8\u5e0c: ",copySuccess:"\u62f7\u8d1d\u6210\u529f! "}},this.en_US={project:{title:"Contract Info",contractAddress:"Contract Address",balanceSero:"Current Balance (SERO)"},account:{title:{utxo:"Wallet Account",contract:"Contract Account",swith:"Switch Account",balanceSero:"Balance (SERO)",estimatedTotal:"Estimated Total Income (SERO)",dayIncome:"Return rate on the day",staticIncome:"Static Return (SERO)",withdraw:"Withdrawal Account (SERO)",detail:"Detail",id:"ID",referId:"Refer ID",areaId:"Large Area ID",totalInvest:"Total Invest",profitLevel:"Profit Level",latestTime:"Latest Share Time",totalReturn:"Total Return",totalReturnDay:"Total return on the day (SERO)",recommend:"Recommend Number",staticIncomeTips:"Your income have been paid to the withdrawal account.",staticIncomeTips2:"Trigger to withdrawal account. ",investDetail:"Invest Info",myIncome:"My performance",areaTotal:"Regional performance",areaOtherTotal:"Total performance (excluding the large region)",staticReward:"Static",recommendReward:"Recommend",nobilityReward:"Nobility",vipReward:"VIP",viewCode:"View Smart Contract"},button:{deposit:"Deposit SERO",invest:"Invest",trigger:"Trigger Income",withdraw:"Withdraw",close:"Close",copy:"Copy"},modal:{deposit:{title:"Deposit",copy:"COPY"},invest:{title:"Invest",referId:"Refer ID",ticket:"Tickets",amount:"Invet Amount",amountTips:"At least invest 10 SERO",availableSERO:"Available Blance",availableExchange:"Max Exchange",total:"Total",estimate:"Estimated Return",password:"Password"},trigger:{password:"Password"},withdraw:{password:"Password",tips:"* This is the withdrawal of the amount to the UTXO account."}}},toast:{lessAmount:"The balance is not enough to pay for this transaction.",minInvest:"Invest Amount at least 10 SERO.",tx:"The transaction was submitted successfully, waiting for the block to be packaged, and the transaction hash: ",copySuccess:"Copy to clipboard successfully! "}}},Q=a(272),tt=a.n(Q),et=a(273),at=a.n(et),nt=new D,ot=new $,st=(R.a.Header,R.a.Content,R.a.Footer),it=H.a.callContract(nt.abi,nt.address),ct=new z.a(10).pow(18),lt=x.a.Countdown,rt=function(t,e,a){O.a[t]({message:e,description:o.a.createElement("p",{style:{wordBreak:"normal",whiteSpace:"pre-wrap",wordWrap:"break-word"}},a),duration:null})},ut=A.a.create({name:"form_in_modal2"})(function(t){Object(I.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(E.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(t=e.call.apply(e,[this].concat(o))).state={confirmLoading:!1,estimateReturn:0,estimateLevel:0,ticket:0,amount:0,total:0},t}return Object(S.a)(a,[{key:"staticTotal",value:function(){var t=this;setTimeout((function(){var e=t.props.times,a=new z.a(t.state.amount),n=3;e>0?n=e:parseFloat(t.state.amount)>0&&parseFloat(t.state.amount)<500?n=3:parseFloat(t.state.amount)>=500&&parseFloat(t.state.amount)<5e3?n=4:parseFloat(t.state.amount)>=5e3&&(n=5),t.setState({total:a.toFixed(6),estimateLevel:n})}),10)}},{key:"render",value:function(){var t=this,e=this.props,a=e.visible,n=(e.rate,e.sero),s=e.onCancel,i=e.onCreate,c=e.form,l=e.referId,r=c.getFieldDecorator,u=c.setFieldsValue;setTimeout((function(){l&&0!==l&&u({ReferId:l})}),100);var d=this;return o.a.createElement(y.a,{visible:a,title:ot[d.props.lang].account.modal.invest.title,onCancel:s,onOk:function(){t.setState({confirmLoading:!0}),setTimeout((function(){i((function(t){d.setState({confirmLoading:t})}))}),10)},confirmLoading:this.state.confirmLoading},o.a.createElement(A.a,{layout:"vertical"},o.a.createElement(A.a.Item,{label:ot[d.props.lang].account.modal.invest.referId},r("ReferId",{rules:[{required:!0,message:"Please Input Refer Id"}]})(o.a.createElement(w.a,{style:{width:"60%"},disabled:!(!l||0===l),placeholder:l||"",autoComplete:"off"}))),o.a.createElement(A.a.Item,{label:"".concat(ot[d.props.lang].account.modal.invest.amount," (Available Balance: ").concat(n," SERO)")},r("AmountSero",{rules:[{required:!0,message:"Please Input Amount! "}]})(o.a.createElement(v.a,{min:0,precision:6,max:parseFloat(n),step:100,style:{width:"60%"},onChange:function(t){d.setState({amount:t}),d.staticTotal()},allowClear:!0,placeholder:"0.000000",autoComplete:"off"})),o.a.createElement("br",null),"SERO (",ot[d.props.lang].account.modal.invest.amountTips,")"),o.a.createElement("p",null,ot[d.props.lang].account.modal.invest.estimate,": ",o.a.createElement("span",{style:{color:"#1DA57A"}},d.state.amount)," (SERO) x ",o.a.createElement("span",{style:{color:"#1DA57A"}},d.state.estimateLevel," "),"(Times) = ",o.a.createElement("strong",{style:{color:"rgb(216, 0, 38)"}},new z.a(d.state.amount).multipliedBy(d.state.estimateLevel).toFixed(6)," "),"SERO"),o.a.createElement("p",null,ot[d.props.lang].account.modal.invest.total," : ",o.a.createElement("strong",{style:{color:"rgb(216, 0, 38)"}},this.state.total)," SERO")))}}]),a}(o.a.Component)),dt=function(t){Object(I.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(E.a)(this,a),(n=e.call(this,t)).selectAccount=function(t){n.setState({currentAccount:t,showAccountSelect:!1,loading:!1}),localStorage.setItem("accountPk",t.PK),window.location.reload()},n.hiddenAccount=function(){n.setState({showAccountSelect:!1})},n.onChange=function(t){n.setState({loading:!t})},n.handleCancel=function(){n.setState({showDeposit:!1})},n.handleBuyAsnowCancel=function(){n.setState({showBuyAsnow:!1})},n.handleBuyAsnowCreate=function(t){var e=Object(g.a)(n),a=n.formRef.props.form;a.validateFields((function(o,s){if(o)t&&t(!1);else{var i=a.getFieldValue("Amount");try{n.executeMethod("buyAsnow",[],new z.a(i).multipliedBy(ct).toString(16),"SERO","",(function(n){n&&(a.resetFields(),e.setState({showBuyAsnow:!1}),setTimeout((function(){rt("success","Successful","".concat(ot[e.state.lang].toast.tx).concat(n))}),3e3)),t&&t(!1)}))}catch(o){o?f.a.error(o.message):f.a.error("request SERO Node error:["+o.message+"]"),t&&t(!1)}}}))},n.handleInvestCancel=function(){n.setState({showInvest:!1})},n.handleInvestCreate=function(t){var e=Object(g.a)(n),a=n.formRef2.props.form;a.validateFields((function(o,s){if(o)t&&t(!1);else{var i=a.getFieldValue("AmountSero"),c=a.getFieldValue("ReferId"),l=a.getFieldValue("Password");if(e.state.ct_details.referId&&(c=e.state.ct_details.referId),new z.a(i).comparedTo(new z.a(n.state.balanceSero))>0)t&&t(!1),f.a.warn(ot[e.state.lang].toast.lessAmount);else if(parseFloat(i)<10)t&&t(!1),f.a.warn(ot[e.state.lang].toast.minInvest);else try{n.executeMethod("invest",[c],new z.a(i).multipliedBy(ct).toString(16),"SERO",l,(function(n){n&&(a.resetFields(),e.setState({showInvest:!1}),setTimeout((function(){rt("success","Successful","".concat(ot[e.state.lang].toast.tx).concat(n))}),3e3)),t&&t(!1)}))}catch(o){o?f.a.error(o.message):f.a.error("request SERO Node error:["+o.message+"]"),t&&t(!1)}}}))},n.calcuPrincipalProfit=function(t,e){if(t){var a="0x"+new z.a(t).multipliedBy(ct).toString(16);n.callMethod("calcuPrincipalProfit",[a],(function(t){e&&e(t)}))}},n.saveInvestFormRef=function(t){n.formRef2=t},n.state={loading:!0,showAccountSelect:!1,showDeposit:!1,showInvest:!1,showShareProfit:!1,showWithdraw:!1,modal1Visible:!1,currentAccount:{},balanceSero:0,ct_id:0,ct_details:{},lang:"zh_CN"},n}return Object(S.a)(a,[{key:"componentWillMount",value:function(){var t=localStorage.getItem("lang");t||(t="zh_CN",localStorage.setItem("lang","zh_CN")),this.setState({lang:t})}},{key:"componentDidMount",value:function(){var t=this;N.a.init(nt.dapp,(function(e){e&&(t.showSelectAccount(),t.state.showAccountSelect||setTimeout((function(){t.getDetail(),t.getContractSeroBalance()}),3e3),setInterval((function(){t.getDetail(),t.getContractSeroBalance(),t.state.currentAccount.PK&&t.getAccount(t.state.currentAccount.PK)}),6e4))}))}},{key:"showSelectAccount",value:function(){if(!this.state.currentAccount.PK){var t=localStorage.getItem("accountPk");t?(this.getAccount(t),this.setState({loading:!1})):this.setState({showAccountSelect:!0})}}},{key:"showDeposit",value:function(){this.setState({showDeposit:!0});var t=document.getElementById("qrImg");Z.a.toCanvas(t,this.state.currentAccount.MainPKr,(function(t){t&&console.error(t),console.log("success!")}))}},{key:"getContractSeroBalance",value:function(){var t=this;t.callMethod("balanceOfSero",[],(function(e){e&&t.setState({ct_balanceOfSero:new z.a(e,10).dividedBy(ct).toFixed(6)})}))}},{key:"getAccount",value:function(t){var e=this;N.a.getAccountDetail(t,(function(a){var n=0;a.Balance.forEach((function(t,e){"SERO"===e&&(n=new z.a(t).dividedBy(ct).toFixed(6))}));var o=new tt.a(t,200).toString();a.avatar="data:image/png;base64,"+o,e.setState({currentAccount:a,balanceSero:n})}))}},{key:"getDetail",value:function(){var t=this;t.callMethod("details",[],(function(e){var a={referId:"",largeAreaId:"",largeAreaTotal:new z.a("0").dividedBy(ct).toFixed(6),amount:new z.a("0").dividedBy(ct).toFixed(6),returnAmount:new z.a("0").dividedBy(ct).toFixed(6),achievement:new z.a("0").dividedBy(ct).toFixed(6),recommendNum:parseInt(new z.a("0").toString(10)),profitLevel:parseInt(new z.a("0").toString(10)),value:new z.a("0").dividedBy(ct).toFixed(6),star:parseInt(new z.a("0").toString(10)),isKing:!1};if("0x0"!==e&&e){var n=e;a={referId:"JFVVW2ITNSJHF"==n[0]?"":n[0],largeAreaId:"JFVVW2ITNSJHF"==n[1]?"":n[1],largeAreaTotal:new z.a(n[2]).dividedBy(ct).toFixed(6),amount:new z.a(n[3]).dividedBy(ct).toFixed(6),returnAmount:new z.a(n[4]).dividedBy(ct).toFixed(6),achievement:new z.a(n[5]).dividedBy(ct).toFixed(6),recommendNum:parseInt(new z.a(n[6]).toString(10)),profitLevel:parseInt(new z.a(n[7]).toString(10)),value:new z.a(n[8]).dividedBy(ct).toFixed(6),star:parseInt(new z.a(n[9]).toString(10)),isKing:n[10]}}t.callMethod("id",[],(function(e){a.id="JFVVW2ITNSJHF"==e?"":e,t.callMethod("detailsOfIncome",[],(function(e){a.detailsOfIncome=e,t.callMethod("calcuStaticProfit",[],(function(e){"0x"===e&&(e="0"),a.dayProfit=new z.a(e).dividedBy(ct).toFixed(6),console.log("dayProfit",a.dayProfit.toString()),t.setState({ct_details:a})}))}))}))}))}},{key:"callMethod",value:function(t,e,a){var n=it.packData(t,e),o={from:this.state.currentAccount.MainPKr,to:nt.address,data:n};N.a.call(o,(function(e,n){if(n)console.log("error::",n);else{var o=it.unPackData(t,e);a(o)}}))}},{key:"executeMethod",value:function(t,e,a,n,o,s){var i=it.packData(t,e),c={from:this.state.currentAccount.PK,to:nt.address,value:"0x"+a,data:i,gas_price:"0x"+new z.a("1000000000").toString(16),cy:n},l={from:this.state.currentAccount.MainPKr,to:nt.address,value:"0x"+a,data:i,gas_price:"0x"+new z.a("1000000000").toString(16),cy:n};N.a.estimateGas(l,(function(t,e){e?f.a.error(e):(c.gas=t,N.a.executeContract(c,(function(t){s(t)})))}))}},{key:"shareProfit",value:function(){var t=this;try{this.executeMethod("triggerStaticProfit",[],"0","SERO","",(function(e){e?rt("success","Successful","".concat(ot[t.state.lang].toast.tx).concat(e)):e.error?f.a.error(e.error.message):f.a.error("request SERO Node error:["+e+"]")}))}catch(e){e?f.a.error(e.message):f.a.error("request SERO Node error:["+e.message+"]")}}},{key:"withdraw",value:function(){var t=this;try{this.executeMethod("withdrawBalance",[],"0","SERO","",(function(e){e?rt("success","Successful","".concat(ot[t.state.lang].toast.tx).concat(e)):e.error?f.a.error(e.error.message):f.a.error("request SERO Node error:["+e+"]")}))}catch(e){e?f.a.error(e.message):f.a.error("request SERO Node error:["+e.message+"]")}}},{key:"render",value:function(){var t=this,e=this.state,a=e.loading,n=e.showAccountSelect,s=e.currentAccount.PK,i=this.state.ct_details.detailsOfIncome?new z.a(this.state.ct_details.detailsOfIncome[0]).dividedBy(ct).toFixed(2):0,c=this.state.ct_details.detailsOfIncome?new z.a(this.state.ct_details.detailsOfIncome[1]).dividedBy(ct).toFixed(2):0,g=this.state.ct_details.detailsOfIncome?new z.a(this.state.ct_details.detailsOfIncome[2]).dividedBy(ct).toFixed(2):0,v=this.state.ct_details.detailsOfIncome?new z.a(this.state.ct_details.detailsOfIncome[3]).dividedBy(ct).toFixed(2):0,w=this.state.ct_details.detailsOfIncome?this.state.ct_details.detailsOfIncome[5]:0,E=[{x:ot[this.state.lang].account.title.staticReward,y:parseFloat(i)},{x:ot[this.state.lang].account.title.recommendReward,y:parseFloat(c)},{x:ot[this.state.lang].account.title.nobilityReward,y:parseFloat(g)},{x:ot[this.state.lang].account.title.vipReward,y:parseFloat(v)}],S=parseFloat(i)>0||parseFloat(c)>0||parseFloat(g)>0||parseFloat(v)>0,b=mt(),I=this.state.ct_balanceOfSero?new z.a(this.state.ct_balanceOfSero).dividedBy(30).toFixed(6):"0",A=0;if(console.log("this.state.ct_details.returnAmount:",this.state.ct_details.returnAmount),this.state.ct_details.returnAmount&&parseFloat(this.state.ct_details.returnAmount)>0){var O=parseFloat(this.state.ct_details.returnAmount),R=new z.a(this.state.ct_details.amount).multipliedBy(this.state.ct_details.profitLevel).toString(10);A=(100*O/parseFloat(R)).toFixed(2)}var _=Math.ceil(1e3*w/6e5)===mt()/6e5;return o.a.createElement("div",{className:"App",style:{marginTop:"0px"}},o.a.createElement("div",{className:"header-n"},o.a.createElement("img",{src:at.a,width:"100%"})),o.a.createElement("div",{className:"content-n"},o.a.createElement("div",{className:"account-n"},o.a.createElement("div",{style:{fontSize:"14px",margin:"5px",color:"#fff"}},ot[this.state.lang].account.title.utxo),o.a.createElement("div",{className:"account-nr"},o.a.createElement(d.a,null,o.a.createElement(p.a,{span:18},o.a.createElement("span",{className:"spanx"},s?s.slice(0,10)+"..."+s.slice(-10):"",this.state.ct_details.isKing?o.a.createElement(h.a,{color:"gold"},"VIP"):"")),o.a.createElement(p.a,{span:6,style:{textAlign:"center"}},o.a.createElement(m.a,{size:"small",type:"primary",onClick:function(){t.setState({showAccountSelect:!0})}},ot[this.state.lang].account.title.swith))),o.a.createElement(d.a,null,o.a.createElement("p",{style:{textAlign:"center",marginTop:"5px",color:"#fff"}},this.state.balanceSero," SERO")),o.a.createElement("p",{style:{textAlign:"center"}},o.a.createElement(m.a,{size:"small",type:"primary",onClick:function(){return t.showDeposit()}},"\u5145\u503c")))),o.a.createElement("div",{className:"contract-tn"},o.a.createElement("div",{className:"contract-dn"},o.a.createElement("div",{className:"contract-n"},o.a.createElement("h2",{style:{textAlign:"center",fontSize:"16px",color:"#fff",marginTop:"10px"}},ot[this.state.lang].account.title.contract),o.a.createElement(u.a,null),o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(p.a,{span:18},o.a.createElement("span",{className:"spanx"},ot[this.state.lang].account.title.estimatedTotal,":",new z.a(this.state.ct_details.amount?this.state.ct_details.amount:0).multipliedBy(this.state.ct_details.profitLevel?this.state.ct_details.profitLevel:0).toFixed(6))),o.a.createElement(p.a,{span:6,style:{textAlign:"center"}},o.a.createElement(m.a,{size:"small",type:"primary",onClick:function(){t.setState({showInvest:!0})}},ot[this.state.lang].account.button.invest))),o.a.createElement("p",null),o.a.createElement(d.a,null,o.a.createElement(p.a,{span:18},o.a.createElement("span",{className:"spanx"},ot[this.state.lang].account.title.staticIncome," ",this.state.ct_details.dayProfit)),o.a.createElement(p.a,{span:6,style:{textAlign:"center"}},_?o.a.createElement(lt,{style:{marginTop:14},title:"",format:"HH:mm:ss",value:parseFloat(b),onFinish:function(){t.getDetail()}}):o.a.createElement(m.a,{style:{marginTop:16},type:"primary",disabled:_,onClick:function(){t.shareProfit()}},ot[this.state.lang].account.button.trigger))),o.a.createElement("p",null),o.a.createElement(d.a,null,o.a.createElement(p.a,{span:18},o.a.createElement("span",{className:"spanx"},ot[this.state.lang].account.title.withdraw,":",new z.a(this.state.ct_details.value?this.state.ct_details.value:0).toFixed(6))),o.a.createElement(p.a,{span:6,style:{textAlign:"center"}},o.a.createElement(m.a,{style:{marginTop:16},disabled:new z.a(this.state.ct_details.value?this.state.ct_details.value:0).comparedTo(0)<1,type:"primary",onClick:function(){t.withdraw()}},ot[this.state.lang].account.button.withdraw)))),o.a.createElement("div",null,S?o.a.createElement(d.a,{style:{textAlign:"center"}},o.a.createElement(p.a,{span:24,style:{textAlign:"center"}},o.a.createElement("div",null,A>0?o.a.createElement(F.WaterWave,{height:234,title:ot[this.state.lang].account.title.totalReturn,percent:A}):o.a.createElement(F.WaterWave,{height:234,title:ot[this.state.lang].account.title.totalReturn,percent:0}))),o.a.createElement(p.a,{span:24,style:{textAlign:"left"}},o.a.createElement(F.Pie,{hasLegend:!0,animate:!0,title:ot[this.state.lang].account.title.totalReturn,subTitle:ot[this.state.lang].account.title.totalReturn,total:function(){return o.a.createElement("span",{dangerouslySetInnerHTML:{__html:E.reduce((function(t,e){return e.y+t}),0)}})},data:E,valueFormat:function(t){return o.a.createElement("span",{dangerouslySetInnerHTML:{__html:t}})},height:248}))):""),o.a.createElement(u.a,{dashed:!0}),o.a.createElement(d.a,{style:{textAlign:"center"}},o.a.createElement(p.a,{span:12},o.a.createElement(x.a,{title:ot[this.state.lang].account.title.totalReturnDay,value:I,precision:6})),o.a.createElement(p.a,{span:12},o.a.createElement(x.a,{title:ot[this.state.lang].account.title.dayIncome,value:this.state.ct_details.dayProfit&&parseFloat(I)>0?new z.a(this.state.ct_details.dayProfit).multipliedBy(100).dividedBy(I).toFixed(2):"0",suffix:"%"}))),o.a.createElement(d.a,{style:{textAlign:"center"}},o.a.createElement("p",null),o.a.createElement(p.a,{span:12},o.a.createElement(x.a,{title:ot[this.state.lang].account.title.areaTotal,value:this.state.ct_details.largeAreaTotal,precision:6})),o.a.createElement(p.a,{span:12},o.a.createElement(x.a,{title:ot[this.state.lang].account.title.areaOtherTotal,value:new z.a(this.state.ct_details.achievement).minus(new z.a(this.state.ct_details.largeAreaTotal)).toFixed(6),precision:6})))))),o.a.createElement("div",{className:"contract-detail-n"},o.a.createElement(l.a,{loading:a},o.a.createElement(r.a,{title:o.a.createElement("h2",{style:{color:"#fff"}},ot[this.state.lang].project.title)},o.a.createElement(r.a.Item,{label:ot[this.state.lang].project.contractAddress},o.a.createElement("small",null,nt.address))),o.a.createElement(u.a,{dashed:!0}),o.a.createElement(r.a,{title:o.a.createElement("h4",{style:{color:"#fff"}},ot[this.state.lang].account.title.investDetail)},o.a.createElement(r.a.Item,{label:ot[this.state.lang].account.title.id},this.state.ct_details.id),o.a.createElement(r.a.Item,{label:ot[this.state.lang].account.title.referId},this.state.ct_details.referId),o.a.createElement(r.a.Item,{label:ot[this.state.lang].account.title.areaId},this.state.ct_details.largeAreaId),o.a.createElement(r.a.Item,{label:ot[this.state.lang].account.title.totalInvest},this.state.ct_details.amount),o.a.createElement(r.a.Item,{label:ot[this.state.lang].account.title.profitLevel},this.state.ct_details.profitLevel),o.a.createElement(r.a.Item,{label:ot[this.state.lang].account.title.latestTime},function(t){if(t&&t>0){var e=new Date(1e3*t);return pt(e.getMonth()+1)+"/"+pt(e.getDate())+" "+pt(e.getHours())+":"+pt(e.getMinutes())}return""}(w)))))),o.a.createElement("div",{className:"footer-n"},o.a.createElement("span",null,"\u98ce\u9669\u6295\u8d44 \u8c28\u614e\u53c2\u4e0e")),o.a.createElement(V,{visible:n,selectAccount:this.selectAccount,hiddenAccount:this.hiddenAccount}),o.a.createElement(y.a,{title:ot[this.state.lang].account.modal.deposit.title,visible:this.state.showDeposit,onCancel:this.handleCancel,footer:null,getContainer:!1},o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("canvas",{id:"qrImg"}),o.a.createElement("p",{style:{wordBreak:"normal",whiteSpace:"pre-wrap",wordWrap:"break-word"}},o.a.createElement("small",null,this.state.currentAccount.MainPKr)),o.a.createElement(m.a,{className:"copyTxt",type:"primary",onClick:function(){U()(t.state.currentAccount.MainPKr),f.a.success("Copy to clipboard successfully")}},ot[this.state.lang].account.modal.deposit.copy))),o.a.createElement(ut,{wrappedComponentRef:this.saveInvestFormRef,visible:this.state.showInvest,onCancel:this.handleInvestCancel,onCreate:this.handleInvestCreate,sero:this.state.balanceSero,asnow:this.state.ct_details.asnowBalances,calcuPrincipalProfit:this.calcuPrincipalProfit,lang:this.state.lang,times:this.state.ct_details.profitLevel,referId:this.state.ct_details.referId}))}}]),a}(n.Component);function mt(){var t=(new Date).getTime()+6e5;return t-=t%6e5}function pt(t){return t=t<10?"0"+t:t}var ht=function(t){Object(I.a)(a,t);var e=Object(b.a)(a);function a(){var t;return Object(E.a)(this,a),(t=e.call(this)).changeLocale=function(e){var a=e.target.value;t.setState({locale:a}),"en"===a.locale?localStorage.setItem("lang","en_US"):"zh-cn"===a.locale&&localStorage.setItem("lang","zh_CN")},t.state={locale:X.a},t}return Object(S.a)(a,[{key:"componentWillMount",value:function(){var t=localStorage.getItem("lang"),e=X.a;t?"zh_CN"===t?e=X.a:"en_US"===t&&(e=G.a):(e=X.a,localStorage.setItem("lang","zh_CN")),this.setState({locale:e})}},{key:"render",value:function(){var t=this.state.locale;return o.a.createElement("div",{className:"App",style:{height:document.documentElement.clientHeight}},o.a.createElement(R.a,{className:"layout"},o.a.createElement(c.a,{locale:t},o.a.createElement(dt,{key:t?t.locale:"en"})),o.a.createElement(st,{style:{textAlign:"center"}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(ht,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[288,1,2]]]);
//# sourceMappingURL=main.58749685.chunk.js.map