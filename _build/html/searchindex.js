Search.setIndex({docnames:["cpu","cpu/isa","cpu/isa/add","cpu/isa/addi","cpu/isa/and","cpu/isa/andi","cpu/isa/beq","cpu/isa/beqal","cpu/isa/div","cpu/isa/divu","cpu/isa/f","cpu/isa/j","cpu/isa/jal","cpu/isa/jali","cpu/isa/ji","cpu/isa/l16","cpu/isa/l16s","cpu/isa/l32","cpu/isa/l32s","cpu/isa/l8","cpu/isa/l8s","cpu/isa/lui","cpu/isa/lw","cpu/isa/mul","cpu/isa/mulu","cpu/isa/nor","cpu/isa/nori","cpu/isa/or","cpu/isa/ori","cpu/isa/s16","cpu/isa/s32","cpu/isa/s8","cpu/isa/sgt","cpu/isa/sgti","cpu/isa/sgtiu","cpu/isa/sgtu","cpu/isa/sll","cpu/isa/slli","cpu/isa/slt","cpu/isa/slti","cpu/isa/sltiu","cpu/isa/sltu","cpu/isa/sra","cpu/isa/srai","cpu/isa/srl","cpu/isa/srli","cpu/isa/sub","cpu/isa/subi","cpu/isa/sw","cpu/isa/syscall","cpu/isa/xor","cpu/isa/xori","cpu/modules","cpu/modules/de_badDetect","cpu/modules/de_canonicalize","cpu/modules/de_isa_def","cpu/modules/ex_advint","cpu/modules/ex_alu","cpu/modules/raisin64","cpu/modules/rf_reg","index","modules","nexysddr","software","tools"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:55},filenames:["cpu.rst","cpu/isa.rst","cpu/isa/add.rst","cpu/isa/addi.rst","cpu/isa/and.rst","cpu/isa/andi.rst","cpu/isa/beq.rst","cpu/isa/beqal.rst","cpu/isa/div.rst","cpu/isa/divu.rst","cpu/isa/f.rst","cpu/isa/j.rst","cpu/isa/jal.rst","cpu/isa/jali.rst","cpu/isa/ji.rst","cpu/isa/l16.rst","cpu/isa/l16s.rst","cpu/isa/l32.rst","cpu/isa/l32s.rst","cpu/isa/l8.rst","cpu/isa/l8s.rst","cpu/isa/lui.rst","cpu/isa/lw.rst","cpu/isa/mul.rst","cpu/isa/mulu.rst","cpu/isa/nor.rst","cpu/isa/nori.rst","cpu/isa/or.rst","cpu/isa/ori.rst","cpu/isa/s16.rst","cpu/isa/s32.rst","cpu/isa/s8.rst","cpu/isa/sgt.rst","cpu/isa/sgti.rst","cpu/isa/sgtiu.rst","cpu/isa/sgtu.rst","cpu/isa/sll.rst","cpu/isa/slli.rst","cpu/isa/slt.rst","cpu/isa/slti.rst","cpu/isa/sltiu.rst","cpu/isa/sltu.rst","cpu/isa/sra.rst","cpu/isa/srai.rst","cpu/isa/srl.rst","cpu/isa/srli.rst","cpu/isa/sub.rst","cpu/isa/subi.rst","cpu/isa/sw.rst","cpu/isa/syscall.rst","cpu/isa/xor.rst","cpu/isa/xori.rst","cpu/modules.rst","cpu/modules/de_badDetect.rst","cpu/modules/de_canonicalize.rst","cpu/modules/de_isa_def.rst","cpu/modules/ex_advint.rst","cpu/modules/ex_alu.rst","cpu/modules/raisin64.rst","cpu/modules/rf_reg.rst","index.rst","modules.rst","nexysddr.rst","software.rst","tools.rst"],objects:{},objnames:{},objtypes:{},terms:{"0x0":2,"0x00000000_00000000":0,"0x00004000":63,"0x00007fff_ffffffff":0,"0x00008000":63,"0x00008000_00000000":0,"0x00040000":63,"0x0f":63,"0x1":46,"0x2":3,"0x3":47,"0x4":49,"0x5":11,"0x6":12,"0x7fffff":[],"0x80":2,"0x81":46,"0x84":38,"0x85":41,"0x86":32,"0x87":35,"0x88":36,"0x89":42,"0x8a":44,"0x8c":4,"0x8d":25,"0x8e":27,"0x8f":50,"0x9":63,"0x90":23,"0x91":24,"0x92":8,"0x93":9,"0x9c":49,"0x9e":11,"0x9f":12,"0xa":63,"0xa0":3,"0xa1":47,"0xa4":39,"0xa5":40,"0xa6":33,"0xa7":34,"0xa8":37,"0xa9":43,"0xaa":45,"0xac":5,"0xad":26,"0xae":28,"0xaf":51,"0xb0":22,"0xb1":17,"0xb2":15,"0xb3":19,"0xb5":18,"0xb6":16,"0xb7":20,"0xb8":48,"0xb9":30,"0xba":29,"0xbb":31,"0xbc":6,"0xbd":7,"0xc":63,"0xc0":2,"0xc1":46,"0xc4":38,"0xc5":41,"0xc6":32,"0xc7":35,"0xc8":[36,44],"0xc9":42,"0xcc":4,"0xcd":25,"0xce":27,"0xcf":50,"0xd0":23,"0xd1":24,"0xd2":8,"0xd3":9,"0xdc":49,"0xdd":10,"0xde":11,"0xdf":12,"0xe":63,"0xe0":3,"0xe1":47,"0xe4":39,"0xe5":40,"0xe6":33,"0xe7":34,"0xe8":37,"0xe9":43,"0xea":45,"0xec":5,"0xed":26,"0xee":28,"0xef":51,"0xf":63,"0xf0":22,"0xf1":17,"0xf2":15,"0xf3":19,"0xf4":21,"0xf5":18,"0xf6":16,"0xf7":20,"0xf8":48,"0xf9":30,"0xfa":29,"0xfb":31,"0xfc":6,"0xfd":7,"0xfe":14,"0xff":13,"0xff00000000000000":[13,14],"0xffff":63,"0xffff7fff_ffffffff":0,"0xffff8000_00000000":0,"0xffffbfff_ffffffff":0,"0xffffc000":63,"0xffffc000_00000000":0,"0xffffc000_00004000":62,"0xffffc000_00008000":62,"0xffffc000_00040000":62,"0xffffc000_0004xxxx":63,"0xffffffff_ffffffff":0,"16i":[],"16kb":0,"16r":[],"1csg324c":62,"1mb":[],"32i":54,"32r":54,"63x64":60,"64S":[],"64j":[13,14],"break":0,"byte":63,"case":[1,53,54,58],"char":63,"default":62,"final":63,"function":[63,64],"long":[60,63],"new":64,"null":63,"return":[7,12,13,63],"super":1,"switch":[0,54,62],"true":54,"while":[0,1,63,64],AND:1,ANDs:[4,5],And:[1,63],Being:64,Bus:[62,64],For:[1,58],L8S:1,Not:64,Ops:54,The:[0,1,7,13,14,62,63,64],There:1,These:[0,1,62],Used:62,Using:[62,64],With:[1,62],_reg:[],abort:0,abov:63,academ:63,acceler:0,access:[0,58,62,64],accomplish:[6,7],across:64,act:0,actual:64,adapt:62,add:[0,1,54,63],addi:[1,54,63],addit:[1,63],addr:[58,62,64],address:[0,1,7,12,13,14,62,63],address_transl:[],adjac:64,advanc:[1,56],advance_pc:[2,3,4,5,6,7,8,9,10,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],advantag:0,advint:56,affect:0,after:63,aggress:62,align:[6,7,11,12,13,14,62,63],all:[0,1],alloc:63,allow:[0,1,56,57],along:[0,64],alreadi:0,also:[0,1,62,63],altern:1,although:[0,62],alu:[56,57],alwai:[0,53,54,56,57,58,62],an235:0,andi:[1,63],ani:[0,64],anoth:[0,62],appeal:1,approach:64,appropri:[1,54,60],arbitrari:0,architectur:[0,60,62,64],aren:[56,57],argument:64,arithmet:1,arm:[0,1],arm_toc13:0,arrai:63,artix:62,ascii:[62,63,64],asciz:63,aspect:63,assembl:63,assign:[53,54,56,57,58,62],associ:0,assum:60,attempt:0,attrib_byt:63,attribut:[62,63],avail:[0,1,13,14,60,62,63,64],avoid:1,bad:53,badopcod:53,badopcode_pr:53,base:[62,63],basic:1,becam:64,becaus:[58,62],been:0,befor:[1,6,7,11,12,13,14,64],begin:[53,54,56,57,58,62],beign:[56,57],being:[1,64],below:1,benefit:0,beq:[1,63],beqal:[1,63,64],between:[0,1],beyond:0,big:60,bin:64,binutil:64,bit:[0,2,3,4,5,6,7,8,9,10,11,12,13,14,21,23,24,25,26,27,28,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,49,50,51,54,60,61,62,64],bitwis:1,blaster:[62,64],blob:[63,64],block:62,board:63,bootstrap:64,borrow:1,bother:63,boundari:[6,7,11,12,13,14],branch:[1,60],buffer:[0,63],bus:[58,63],busi:[56,57],cach:[58,60,62],call:[1,63],can:[0,6,7,62,63,64],canon:1,canonic:54,capabl:0,carri:62,caus:0,cell:[62,63],cfg:64,chang:[58,63],charact:[62,63],chargen:62,chosen:62,chrispvil:[62,63,64],clear:63,cleardisp:63,cleardisp_don:63,cleardisp_loop:63,clearpag:[],clk:[56,57,58],clk_dig:62,clock:[0,56,57,58],clone:62,code:[],col:63,collect:64,color:[62,63],color_b:63,color_g:63,color_i:63,color_r:63,color_w:63,com:[0,62,63,64],combin:[1,62],come:58,comfort:64,command:64,commit:[56,57],commun:64,compact:[1,54,63],compar:[0,1,6,7,60],compat:[62,64],complement:8,complet:[62,63,64],complic:62,compromis:1,comput:64,concept:1,condit:58,configur:[0,62,64],connect:62,constrain:0,construct:64,contain:[1,62,63,64],content:[0,64],context:0,continu:63,continui:[],control:[0,1,53,56,57,58,62,63,64],convei:0,conveni:1,convent:64,convention:0,convert:[54,64],copiou:62,core:[58,64],could:1,counter:[0,13,14],cover:1,cpu:[58,60,62,64],cpu_cach:[],cpu_clk:58,cpu_debug_to_dmem_data:58,cpu_debug_to_imem_data:58,cpu_dmem_addr:58,cpu_dmem_c:58,cpu_dmem_to_debug_data:58,cpu_dmem_to_debug_data_readi:58,cpu_dmem_w:58,cpu_halt_cpu:58,cpu_imem_addr:58,cpu_imem_c:58,cpu_imem_to_debug_data:58,cpu_imem_to_debug_data_readi:58,cpu_imem_w:58,cpu_resetn_cpu:58,cpu_rst_n:58,creat:[58,60,63,64],critic:0,current:[13,14,63,64],custom:[62,64],customarili:0,cycl:[56,57],dai0235c:0,data:[0,1,53,54,56,57,58,62,63,64],data_in:58,data_out:58,dbg_dmem_addr:58,dbg_dmem_c:58,dbg_dmem_to_ram:58,dbg_dmem_w:58,dbg_halt_cpu:58,dbg_imem_addr:58,dbg_imem_c:58,dbg_imem_to_ram:58,dbg_imem_w:58,dbg_resetn_cpu:58,ddr:63,de_baddetect:[52,61],de_canonic:[52,61],de_isa_def:[52,53,54,61],debug:58,debug_control:58,debug_if:58,decid:[1,64],decod:[1,53,54,62],decoupl:1,decrement:1,deep:64,defer:0,defin:63,definit:64,delai:63,demonstr:63,depend:[0,60,64],describ:1,design:[0,1,60,63,64],destin:[1,13,14,64],detect:53,detector:53,develop:[0,64],devic:62,diagram:62,dictat:62,did:[0,64],differ:[63,64],directori:[62,64],disassembl:64,dispatch:[56,57],displac:[1,6,7],displai:[58,63],dissimilar:64,distribut:62,div:[1,9],divid:1,divu:1,dmem:[58,64],dmem_addr:58,dmem_cycle_complet:58,dmem_din:58,dmem_dout:58,dmem_from_ram:58,dmem_init:58,dmem_rstrob:58,dmem_to_cpu:58,dmem_to_ram:58,dmem_write_width:58,dmem_wstrob:58,doc:0,document:0,doe:60,don:[62,63],done:[0,64],down:63,download:62,drama:64,dramat:58,draw:[1,62,63],drew:63,dsp48e1:62,dsp:62,due:[13,14,62],dump:64,each:[0,1,62,63],earli:64,easi:[],easier:[1,63,64],easili:[63,64],educ:60,effect:[1,64],effective_dmem_addr:58,effective_dmem_to_ram:58,effective_imem_addr:58,effective_imem_data_to_cpu:58,effici:1,effort:64,either:[0,62],elf:64,elimin:0,els:[6,7,53,54,56,57,58,62],emploi:60,emul:0,enabl:[56,57,62],encod:1,encount:1,end:[53,54,56,57,58,62],endcas:[53,54],endian:60,endm:63,endmodul:[53,54,56,57,58],ensur:0,entir:[1,64],entri:0,enumer:1,equal:1,error:[56,57],etc:[60,63,64],eventu:64,evict:0,ex_advint:[52,61],ex_advint_s1:56,ex_advint_s1_1:56,ex_alu:[52,61],ex_alu_s1:57,ex_alu_s1_1:57,ex_busi:[56,57],ex_en:[56,57],examin:64,exampl:[1,63,64],except:[0,1],execut:[56,57,58,60],exercis:63,exist:[1,64],exit:64,expand:[0,1,54],expect:0,expermint:[],explicit:[],explicitli:[56,57],explor:64,express:1,extend:[0,1,3,54,63],extens:[],extern:[58,63,64],extract:64,familiar:64,fast:62,featur:[60,64],fetch:[],few:63,field:[1,54],fifo:[],figur:0,file:[60,64],fill:63,fin_loop:63,finish:58,first:[0,1],fit:1,fix:[0,62,63],flag:[53,62],flip:62,flop:62,flush:0,fn_enter:63,fn_exit:63,follow:0,forget:62,form:1,format:[13,14,54,60,61,63],fpga:0,fpu:1,frag:63,free:[0,60,63,64],friendly_print:63,from:[0,1,13,14,62,63],full:[0,1,54,64],fulli:0,gcc:64,gdb:64,gener:[0,1,62,64],get:[62,63],github:[62,63,64],given:[63,64],gnu:[63,64],goal:64,good:1,gracious:1,greater:1,greet:63,greet_str:63,grow:[1,63],half:63,halt:64,handl:58,happen:0,hardwar:[0,63],hardwir:1,harvard:[0,60],has:[1,56,57],have:[0,1,63],heavili:1,hello:63,hello_str:63,help:[0,64],here:[63,64],hex:64,hierarchi:62,highli:0,how:63,howev:[],html:0,http:[0,62,63,64],hundr:64,ignor:54,illusori:0,imem:[58,64],imem_addr:58,imem_addr_valid:58,imem_data:58,imem_data_readi:58,imem_data_valid:58,imem_init:58,imm:[3,5,6,7,13,14,54],immedi:[6,7,11,12,54,63],impact:0,implement:[0,1,63,64],in1:[56,57],in2:[56,57],includ:[0,53,54,60,62],increment:[1,63],index:0,indic:1,infocent:0,inform:[0,62],infrastructur:64,inhibit:0,init:64,init_fil:58,initi:[0,56,57,64],input:[53,54,56,57,58,62,64],inspir:[0,60,63],instal:64,instead:[1,58,60,63,64],instin:54,instopbytein:53,instout:54,instout_pr:54,instruct:[0,6,7,11,12,13,14,53,54,58,60,61,63,64],integ:[1,56,57,60],integr:0,intention:[],interact:62,interest:63,interfac:[58,62,64],interlock:60,intern:[1,58],interrupt:[],introduc:60,introduct:62,invalid:[0,53,54],invok:64,io_hadr:63,io_spac:58,is16:53,is32:53,is64:53,isa:[63,64],issu:[0,60],iter:63,its:62,itself:[6,7],jal:[1,54,64],jali:[1,54,63],jtag:[58,62,64],jtag_tck:58,jtag_tdi:58,jtag_tdo:58,jtag_tm:58,jtag_trst:58,jtaglet:64,jump:[6,7],just:[58,64],keep:64,kernel:0,known:[0,62],l16:1,l32:1,label:63,languag:64,larg:[0,1,64],larger:[1,60],largest:0,latch:62,later:0,lead:63,leaf:63,least:62,led:62,led_en:62,led_ladr:63,led_reg:62,left:[1,6,7,11,12,13,14],legal:0,length:1,less:[0,1,62],level:0,leverag:64,life:63,like:[0,1,63,64],line:64,linear:[0,7],link:[1,64],linker:64,linux:[0,64],load:[0,1,60,63],locat:[0,63,64],logic:[1,58,62],lookasid:0,lower:63,lui:[1,63],lut:62,machin:[0,1,62,64],macro:63,made:[0,64],mai:0,main:0,major:60,make:[0,1,63,64],manag:0,mani:[0,64],manipul:[1,64],map:[0,62],mask:63,master:[63,64],math:1,mean:[1,64],mechan:0,meet:[],mem_addr:[58,62],mem_addr_valid:[58,62],mem_din:58,mem_din_readi:58,mem_dout:58,mem_dout_writ:58,mem_from_cpu:62,mem_from_cpu_writ:62,mem_to_cpu:62,mem_to_cpu_readi:62,memori:[58,62,63,64],memory_map:[58,62],memory_map_extern:62,memory_map_intern:58,microarchitectur:1,minut:62,mip:[0,1,60,63,64],mirror:63,misalign:[58,63],misus:64,mitig:0,mmap:0,mmu:60,mnemon:63,mode:[0,1],model:1,modern:[0,64],modif:0,modifi:[60,64],modified_harvard_architectur:[],modul:[53,54,56,57,58,61,62],monitor:62,more:[1,62],most:[54,60,62,64],mostli:64,moxi:64,much:[62,64],mul:[1,63],multipl:[1,60],multipli:1,mulu:1,must:[0,6,7,11,12,13,14],mux:62,name:[62,64],nativ:54,natur:1,nearli:0,necess:64,necessari:[0,1,64],necessit:0,need:[0,1,62,63],negedg:[56,57,58,62],netbsd:0,never:0,nexi:63,next:[7,56,57,58],next_pc:[7,12],nexys4ddr:63,nommu:0,non:[54,62,63],none:[4,5,6,7,8,9,10,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,48,50,51,64],nonetheless:1,nop:63,nor:1,nori:1,normal:1,note:[62,64],now:[0,56,58,62,63],num_byt:58,number:[0,1,63,64],numitemsincol:63,objcopi:64,objdump:64,object:64,obtain:64,offici:64,offset:[0,63],often:1,onboard:62,one:[1,56,57,62],ones:1,onli:[0,1,13,14,62,64],onto:[1,63],op16_add:54,op16_addi:54,op16_j:54,op16_jal:54,op16_sub:54,op16_subi:54,op16_syscal:54,op_add:54,op_addi:54,op_bad_02:53,op_bad_03:53,op_bad_0b:53,op_bad_14:53,op_bad_15:53,op_bad_16:53,op_bad_17:53,op_bad_18:53,op_bad_19:53,op_bad_1a:53,op_bad_1b:53,op_bad_22:53,op_bad_23:53,op_bad_2b:53,op_fstar:53,op_j:54,op_jal:54,op_jali:53,op_ji:53,op_lui:53,op_sgti:54,op_slti:54,op_sub:54,op_subi:54,op_syscal:54,opcod:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,53,54,60,63],open:62,openocd:62,oper:[0,1,60,62,64],operand:[8,9,54],optim:[],option:[62,63,64],order:[0,60],ordinari:1,org:[0,64],ori:[1,63],orient:62,origin:63,other:[0,54,63,64],our:[56,57,62],out2:56,out2_pr:56,out:[0,56,57,60,62,64],out_pr:[56,57],output:[53,54,56,57,58,62,64],outsid:64,over:0,overlap:0,overview:61,overwhelm:63,overwrit:63,pack:63,packag:62,page:[0,62,63],paramet:58,part:60,pass:[0,1],path:[],penalti:1,pend:0,perform:0,period:[0,63],peripher:[],permit:1,physic:0,pipelin:[58,60],pipeline1:58,place:[0,2,3,4,5,7,8,9,12,13,62],plain:63,point:0,pointer:[63,64],popul:54,port:[0,63,64],portion:63,posedg:[56,57,58,62],posit:63,potenti:0,power3:60,power:64,pre:[62,63],precis:0,prefix:64,preliminari:64,prepar:[63,64],present:[0,60,62,63,64],previou:63,primarili:0,principl:0,print:63,printchar:63,printcharimm:63,printstr:63,printstr_don:63,printstr_nextchar:63,privilag:0,probe:[62,64],process:[0,1,64],processor:[0,1,62,63,64],produc:64,prog:64,program:[0,1,6,7,13,14,64],programimemdmem:64,programm:[1,64],project:[0,60,62],proof:63,properli:0,propos:60,provid:[0,60,62,64],pure:60,purpos:[0,62,64],put:[54,63],quick:64,quit:64,quotient:[8,9],r10000:60,r16:63,r17:63,r18:63,r19:63,r20:63,r21:63,r60:[],r62:64,r63:[7,12,13,64],raisin64:[52,53,54,56,57,61,62,63,64],raisin64_dump_dmem:64,raisin64_dump_imem:64,raisin64_halt:64,raisin64_nodeps_openocd:64,raisin64_program:64,raisin64_reset:64,raisin64_resum:64,ram:[0,58,62,63],ramb18:62,ramb36:[],ramb36e1:62,rang:64,rate:0,rd2:[8,9,54],rd2_in_rn:56,rd2_out_rn:56,rd_in_rn:[56,57],rd_out_rn:[56,57],read:63,readi:64,readmemh:64,real:63,reason:[58,62,64],recent:64,reconfigur:64,recov:0,recurs:62,reduc:1,ref:1,refer:63,reg:[53,54,56,57,58,62],regardless:0,region:0,regist:[2,3,4,5,6,7,8,9,56,57,60,62,64],regsit:1,regular:1,rel:0,releas:62,remaind:[8,9],rememb:54,remot:64,renam:60,repeat:[63,64],replic:0,repositori:62,repres:1,represent:[],request:1,requir:[58,64],reserv:1,reset:[63,64],reset_finloop:63,resort:0,resourc:62,respect:[0,64],rest:1,restor:63,result:[0,2,3,4,5,56,57,62,63,64],revis:58,rewritten:64,rf_reg:[52,61],right:1,risc:60,rom:63,rout:62,row:63,rownum:63,rs1:[2,3,4,5,8,9,54],rs2:[2,4,8,9,54],rst_n:[56,57,58,62],run:[0,62,63,64],s16:1,s32:1,sai:63,same:[1,63],scan:62,schedul:[],scheme:[0,64],scope:[0,60,64],scratch:64,script:64,second:0,section:[0,64],see:1,seen:63,segment:[0,63],select:[1,62],semest:[60,64],send:63,separ:0,seri:62,servic:1,set:[0,54,61,63,64],setup:63,sever:[0,62,63],sgt:1,sgti:[1,54],sgtiu:1,sgtu:1,share:1,shift:[1,6,7,11,12,13,14,62,63],should:[0,62,64],sign:[0,1,3,6,7,8,54,63],sign_extend:[3,54],signal:[1,53,56,57,58,62],signific:[0,62,64],similar:62,simpl:[0,56,57,62,63],simplest:63,simpli:[58,62],simplifi:60,simul:63,simultan:63,sit:0,site:62,situat:0,size:[0,1,13,14,54,64],slice:62,sll:1,slli:[1,63],slot:63,slow:0,slt:1,slti:[1,54],sltiu:1,sltu:1,small:[0,1,62],smaller:[1,64],snippet:[],soc:[],softwar:0,some:[0,1,64],somewher:[56,57],soon:63,sourc:[1,62],sourcewar:[],space:[0,1,58,62,63],spaceunifi:[],spec:0,special:[1,58,60,64],specif:[1,63],speed:[0,62],spirit:64,split:[0,60],sra:1,srai:1,srl:1,srli:1,stack:[63,64],stack_init_head:63,stage:[56,57],stall:[56,57],standard:[],start:63,state:[58,64],step:0,still:64,storag:63,store:[1,60,63],str_ptr:63,stream:0,string:63,sub:[1,54],subi:[1,54,63],subsequ:60,subsystem:63,subtract:1,suffex:[],suffic:63,suffici:[1,62],suitabl:64,superscalar:60,support:[58,62,63,64],sure:64,sw_en:62,sw_ladr:63,sw_loop:63,sw_pre0:62,sw_pre1:62,synchron:62,syntax:64,synthes:[],synthesi:62,sys_rstn:58,syscal:[1,54],system:[0,1,60,62,64],tabl:0,tag:0,take:[0,62,64],taken:[0,13,14],target:64,templat:64,ten:64,termin:[0,63],test:[63,64],text:[63,64],than:[1,62],thei:[0,1],them:[63,64],theme:64,thi:[0,1,54,56,57,58,63,64],those:1,thousand:64,thread:64,three:[0,1],through:[0,62,63],tile:62,time:[58,64],todo:[1,10,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,58,63],told:[56,57],too:64,tool:63,top:[13,14],topic:0,toward:63,track:[0,63],translat:0,translation_lookaside_buff:[],treat:[8,9],trivial:[62,63],turn:[],two:62,txt:0,type:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,54,60,62],unalign:58,uncondit:[6,7,11,12,13,14],underli:1,unifi:[0,1,58],unit:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,53,54,56,57,58,60],unlik:60,unmap:0,unsign:1,unsupport:58,updat:62,upper:[1,63],usag:[],use:[60,62,63,64],used:[0,1,54,63,64],useful:63,user:0,userspac:0,uses:[0,1,62,64],using:[0,60,62,64],usual:[1,64],util:[62,64],valid:[56,57],valu:[1,3,5,6,7,11,12,13,14],variabl:1,vendor:[],verilog:[61,64],version:[1,54,64],vga:62,vga_dout:62,vga_en:62,vga_ladr:63,via:64,video:[62,63],view:1,virtual:[0,1],vivado:62,wai:[0,64],wait:62,wast:1,well:[1,63,64],were:[63,64],what:64,whatev:0,when:[1,56,57,58,60,62],whenev:1,where:0,wherev:0,which:[0,1,63,64],width:[0,1],wiki:0,wikipedia:[],window:0,wire:[53,56,57,58,62],without:[0,64],won:63,word:[1,62,63,64],work:63,world:63,would:64,write:[0,62,63,64],write_width:58,written:62,wrote:64,www:0,x86:64,xc7a100t:62,xilinx:62,xor:1,xori:1,xpr:62,xxd:64,yet:1,zero:[63,64]},titles:["Raisin64 CPU","Raisin64 Instruction Set","ADD - Integer Add","ADDI - Integer Add Immediate","AND - Bitwise AND","ANDI - Bitwise AND Immediate","BEQ - Branch if Equal","BEQAL - Branch if Equal And Link","DIV - Integer Divide","DIVU - Unsigned Integer Divide","F* - FPU Call","J - Jump","JAL - Jump and Link","JALI - Jump and Link Immediate","JI - Jump Immediate","L16 - Load 16-bit","L16S - Load 16-bit Sign-Extend","L32 - Load 32-bit","L32S - Load 32-bit Sign-Extend","L8 - Load 8-bit","L8S - Load 8-bit Sign-Extend","LUI - Load Upper Immediate","LW - Load 64-bit Word","MUL - Integer Multiply","MULU - Unsigned Integer Multiply","NOR - Bitwise NOR","NORI - Bitwise NOR Immediate","OR - Bitwise OR","ORI - Bitwise OR Immediate","S16 - Store 16-bit","S32 - Store 32-bit","S8 - Store 8-bit","SGT - Set 1 if Greater Than","SGTI - Set 1 if Greater Than Immediate","SGTIU - Set 1 if Greater Than Immediate Unsigned","SGTU - Set 1 if Greater Than Unsigned","SLL - Shift Left Logical","SLLI - Shift Left Logical Immediate","SLT - Set 1 if Less Than","SLTI - Set 1 if Less Than Immediate","SLTIU - Set 1 if Less Than Immediate Unsigned","SLTU - Set 1 if Less Than Unsigned","SRA - Shift Right Arithmetic","SRAI - Shift Right Arithmetic Immediate","SRL - Shift Right Logical","SRLI - Shift Right Logical Immediate","SUB - Integer Subtract","SUBI - Integer Subtract Immediate","SW - Store 64-bit Word","SYSCALL - System Call","XOR - Bitwise XOR","XORI - Bitwise XOR Immediate","Verilog Module Index","de_badDetect.v","de_canonicalize.v","de_isa_def.vh","ex_advint.v","ex_alu.v","Raisin64.v","rf_reg.v","Welcome to Raisin64\u2019s documentation!","Reference Index","Nexys 4 DDR Reference Implementation","Code Snippets and Software","Tools"],titleterms:{"16i":1,"16r":1,"32i":1,"32r":1,"64S":1,"64j":1,"switch":63,"while":[],AND:[4,5],And:7,But:1,L8S:20,add:[2,3],addi:3,advanc:0,andi:5,arithmet:[42,43],assembl:64,beq:6,beqal:7,binari:64,bit:[1,15,16,17,18,19,20,22,29,30,31,48],bitwis:[4,5,25,26,27,28,50,51],branch:[0,6,7],build:64,cach:0,call:[10,49],can:[],code:63,commit:0,content:[],core:62,cpu:0,ddr:62,de_baddetect:53,de_canonic:54,de_isa_def:55,debug:[0,64],decod:0,demo:63,design:[],develop:[],div:8,divid:[8,9],divu:9,document:60,done:[],encod:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],ensur:[],equal:[6,7],ex_advint:56,ex_alu:57,execut:0,extend:[16,18,20],extens:0,fetch:0,file:0,footnot:60,format:1,fpu:10,from:64,futur:[0,64],get:64,greater:[32,33,34,35],handl:[],hardwar:62,immedi:[1,3,5,13,14,21,26,28,33,34,37,39,40,43,45,47,51],implement:62,index:[52,61],initi:[],instruct:1,integ:[0,2,3,8,9,23,24,46,47],integr:[],interrupt:0,jal:12,jali:13,jump:[1,11,12,13,14],l16:[15,16],l32:[17,18],led:63,left:[36,37],less:[38,39,40,41],link:[7,12,13],load:[15,16,17,18,19,20,21,22],logic:[36,37,44,45],lui:21,memori:0,mmu:0,modif:[],modul:52,mul:23,multipli:[23,24],mulu:24,nexi:62,nor:[25,26],nori:26,opcod:1,openocd:64,oper:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],ori:28,out:[],overview:[0,1],period:[],peripher:62,pipelin:0,present:[],primarili:[],process:[],program:63,project:[],propos:0,raisin64:[0,1,58,60],refer:[0,61,62],regist:[0,1],releas:64,requir:62,rf_reg:59,right:[42,43,44,45],s16:29,s32:30,schedul:0,scope:[],set:[1,32,33,34,35,38,39,40,41],sgt:32,sgti:33,sgtiu:34,sgtu:35,shift:[36,37,42,43,44,45],sign:[16,18,20],signific:[],sll:36,slli:37,slt:38,slti:39,sltiu:40,sltu:41,snippet:63,soc:62,softwar:63,some:[],sourc:64,sra:42,srai:43,srl:44,srli:45,stage:0,standard:1,store:[29,30,31,48],sub:46,subi:47,subtract:[46,47],synthes:62,syscal:49,system:49,tabl:1,than:[32,33,34,35,38,39,40,41],thei:[],tool:64,unit:[0,1],unsign:[9,24,34,35,40,41],upper:21,usag:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],verilog:52,vga:63,welcom:60,why:1,without:[],word:[22,48],work:[0,64],xor:[50,51],xori:51}})