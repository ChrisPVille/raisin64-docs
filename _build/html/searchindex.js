Search.setIndex({docnames:["cpu","cpu/isa","cpu/isa/add","cpu/isa/addi","cpu/isa/and","cpu/isa/andi","cpu/isa/be","cpu/isa/bo","cpu/isa/div","cpu/isa/divi","cpu/isa/j","cpu/isa/jal","cpu/isa/jali","cpu/isa/ji","cpu/isa/lw","cpu/isa/nop","cpu/isa/nor","cpu/isa/nori","cpu/isa/or","cpu/isa/ori","cpu/isa/seq","cpu/isa/seqi","cpu/isa/sle","cpu/isa/slei","cpu/isa/sll","cpu/isa/slli","cpu/isa/slt","cpu/isa/slti","cpu/isa/sne","cpu/isa/snei","cpu/isa/sra","cpu/isa/srai","cpu/isa/srl","cpu/isa/srli","cpu/isa/sub","cpu/isa/subi","cpu/isa/sw","cpu/isa/syscall","cpu/isa/xor","cpu/isa/xori","cpu/modules","cpu/modules/raisin64","index","modules","nexysddr","software","tools"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:55},filenames:["cpu.rst","cpu/isa.rst","cpu/isa/add.rst","cpu/isa/addi.rst","cpu/isa/and.rst","cpu/isa/andi.rst","cpu/isa/be.rst","cpu/isa/bo.rst","cpu/isa/div.rst","cpu/isa/divi.rst","cpu/isa/j.rst","cpu/isa/jal.rst","cpu/isa/jali.rst","cpu/isa/ji.rst","cpu/isa/lw.rst","cpu/isa/nop.rst","cpu/isa/nor.rst","cpu/isa/nori.rst","cpu/isa/or.rst","cpu/isa/ori.rst","cpu/isa/seq.rst","cpu/isa/seqi.rst","cpu/isa/sle.rst","cpu/isa/slei.rst","cpu/isa/sll.rst","cpu/isa/slli.rst","cpu/isa/slt.rst","cpu/isa/slti.rst","cpu/isa/sne.rst","cpu/isa/snei.rst","cpu/isa/sra.rst","cpu/isa/srai.rst","cpu/isa/srl.rst","cpu/isa/srli.rst","cpu/isa/sub.rst","cpu/isa/subi.rst","cpu/isa/sw.rst","cpu/isa/syscall.rst","cpu/isa/xor.rst","cpu/isa/xori.rst","cpu/modules.rst","cpu/modules/raisin64.rst","index.rst","modules.rst","nexysddr.rst","software.rst","tools.rst"],objects:{},objnames:{},objtypes:{},terms:{"16kb":42,"64x64":42,"case":1,"float":42,"while":1,The:1,There:1,add:[1,43],address:[1,42],all:1,allow:1,altern:1,appeal:1,appropri:1,architectur:42,arm:1,assembl:42,avoid:1,below:1,between:1,big:42,bit:[1,42],borrow:1,branch:42,cach:42,canon:1,clk:41,clock:41,code:42,compromis:1,concept:1,condit:42,content:42,control:[1,41],core:42,could:1,cpu:[41,42],creat:42,data:41,ddr:42,debug:[41,42],decid:1,decod:1,decoupl:1,describ:1,design:[1,42],doe:42,draw:1,each:1,educ:42,effici:1,emploi:42,encod:1,endian:42,endmodul:41,etc:42,expand:1,featur:42,file:42,fix:42,form:1,format:43,from:1,gener:1,good:1,gracious:1,halt:41,handl:42,hardwar:42,hardwir:1,has:1,have:1,heavili:1,immedi:1,implement:[1,42],includ:42,index:42,initi:42,input:41,instead:42,instruct:[42,43],integ:42,interfac:41,interlock:42,interrupt:42,larger:42,length:1,level:42,like:1,load:[1,42],machin:1,major:42,mean:1,mem_add:41,mem_addr_valid:41,mem_din:41,mem_din_readi:41,mem_dout:41,mem_dout_writ:41,memori:41,microarchitectur:1,mip:[1,42],mmu:42,model:1,modul:[41,42,43],more:1,most:42,multipl:[1,42],natur:1,necessari:1,need:1,nexi:42,nonetheless:1,often:1,opcod:1,oper:42,order:42,output:41,overview:[42,43],page:42,part:42,penalti:1,peripher:42,pipelin:42,point:42,power3:42,process:1,processor:1,program:1,programm:1,project:42,provid:42,pure:42,r10000:42,raisin64:[40,43],ref:1,refer:42,regist:[1,42],regular:1,requir:42,risc:42,rst_n:41,same:1,see:1,set:[42,43],signal:[1,41],similar:42,size:[1,42],snippet:42,soc:42,softwar:42,some:1,space:1,special:42,specif:1,stage:42,store:42,superscalar:42,synthes:42,tabl:42,than:1,thei:1,thi:1,three:42,todo:1,tool:42,type:42,underli:1,unit:[1,42],unlik:42,usual:1,valu:1,variabl:1,verilog:[42,43],version:1,virtual:42,wast:1,well:1,when:1,which:1},titles:["Raisin64 CPU","Raisin64 Instruction Set","ADD","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","&lt;no title&gt;","Verilog Module Index","Raisin64.v","Welcome to Raisin64\u2019s documentation!","Reference Index","Nexys 4 DDR Reference Implementation","Code Snippets and Software","Tools"],titleterms:{But:1,add:2,assembl:46,cach:0,code:45,core:44,cpu:0,ddr:44,debug:[0,46],document:42,format:1,get:46,handl:45,hardwar:44,implement:44,index:[40,43],initi:45,instruct:1,interrupt:[0,45],mmu:[0,45],modul:40,nexi:44,openocd:46,overview:[0,1],peripher:44,pipelin:0,raisin64:[0,1,41,42],refer:[43,44],requir:44,set:1,snippet:45,soc:44,softwar:45,stage:0,synthes:44,tool:46,unit:0,verilog:40,welcom:42,why:1}})