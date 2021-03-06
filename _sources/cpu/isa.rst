.. _isa:

Raisin64 Instruction Set
========================

Overview
--------

The Raisin64's instruction set draws heavily from MIPS with some concepts graciously borrowed from ARM as well.  While the programmer's model and instruction set are decoupled from the underlying microarchitecture of the specific implementation, it was nonetheless decided to design the instructions such that a hardwired control unit (see :ref:`Decode Unit <cpu:Decode Unit>`) could process and set the appropriate signals.

Instructions are variable length (16-64) bit, and some have multiple forms like the :ref:`ADD Instruction <cpu/isa/add:ADD - Integer Add>`.  When an instruction has multiple encodings, the opcode is usually the same between the alternate length versions of that instruction, but in all cases the processor expands the 16 and 32-bit versions of the instruction into their canonical 64-bit form, which has a regular encoding.  The general instruction formats and opcodes are described below.

.. admonition:: But Why?

   There is a natural appeal to 64 registers on a 64-bit machine.  This means 6 bits are needed in the instruction format to address each register.  While 64-bit instructions allow this and efficient loading of immediate values, they waste program space more often than not.  Variable length instructions are a good compromise to avoid the size penalty when not necessary.

Instruction Format
------------------

There are 6 instruction formats in Raisin64, register and immediate type 16-bit formats (16R and 16I), register and immediate type 32-bit formats (32R and 32I), and a combined register and immediate 64-bit format (64S) as well as a jump format (64J).

Comparing the 16, 32, and 64-bit formats, the smaller instructions contain those instructions which will fit in the reduced number of bits.  The larger instruction formats are a super-set of the smaller ones, and whenever an instruction is available in a smaller format, it is available in all larger formats.  For example, ADDI is available in 16, 32, and 64-bit instruction size, with the permitted size of the immediate growing as the instruction grows.

The 32 and 64-bit instruction formats share the same Unit/Op numbers, which are effectively the OpCode.  The Unit number represents the type of operation while the Op indicates the specific operation requested.  This conveniently fits into the first 8 bits of the instruction, making the opcode easier to view and manipulate.

16-bit formats
--------------

16R - 16-bit Register Format
++++++++++++++++++++++++++++

.. bitfields:: 16r.json
   :alt: 16R
   :align: center
   :bigendian:
   :lanes: 1
   :hspace: 400
   :bits: 16
   
The 16-bit regsiter format is a compact expression of select instructions operating with one source and one destination register.  Instructions normally operating on three registers, such as ADD, instead operate in 2-register mode (i.e. ``$rd`` = ``$rd`` + ``$rs``).
   
   
16I - 16-bit Immediate Format
+++++++++++++++++++++++++++++

.. bitfields:: 16i.json
   :alt: 16I
   :align: center
   :bigendian:
   :lanes: 1
   :hspace: 400
   :bits: 16
   
The 16-bit immediate format is used only for ADDI and SUBI, allowing for small increment and decrement operations in a compact format.

16-bit OpCode Table
+++++++++++++++++++

+--------------+-------------+
|  OpCode      |    Type     |
+==============+=============+
| 0 - ADD      |     16R     |
+--------------+-------------+
| 1 - SUB      |     16R     |
+--------------+-------------+
| 2 - ADDI     |     16I     |
+--------------+-------------+
| 3 - SUBI     |     16I     |
+--------------+-------------+
| 4 - SYSCALL  |     16R     |
+--------------+-------------+
| 5 - J        |     16R     |
+--------------+-------------+
| 6 - JAL      |     16R     |
+--------------+-------------+
| 7 - Reserved |             |
+--------------+-------------+

32/64-bit Formats
-----------------
   
32R - 32-bit Register Format
++++++++++++++++++++++++++++

.. bitfields:: 32r.json
   :alt: 32R
   :align: center
   :bigendian:
   :lanes: 1
   :hspace: 700
   :bits: 32
   
All register type instructions in the Raisin64 are available in 32R format.  The only exception of this is the F* FPU call, which also uses the immediate field of the 64S format.
   
   
32I - 32-bit Immediate Format
+++++++++++++++++++++++++++++

.. bitfields:: 32i.json
   :alt: 32I
   :align: center
   :bigendian:
   :lanes: 1
   :hspace: 700
   :bits: 32
   
With the exception of JI, JALI, and LUI, all immediate type instructions in the Raisin64 are available in the 32I format with a 12-bit immediate value.
   
   
64S - 64-bit Standard Format
++++++++++++++++++++++++++++

.. bitfields:: 64s.json
   :alt: 64S
   :align: center
   :bigendian:
   :lanes: 2
   :hspace: 700
   :bits: 64
   
All register and immediate type instructions (except the immediate type branch and jump instructions) are available in the unified 64S format.  When smaller width instructions are encountered by the Raisin64, they are internally expanded into canonical 64S format before being passed onto the rest of the processor.  This 64-bit format has space for 4 registers (allowing for instructions like MUL) in addition to 32-bits of immediate data for shifting, bitwise, and ordinary  immediate operations).
   
   
64J - 64-bit Jump Format
++++++++++++++++++++++++

.. bitfields:: 64j.json
   :alt: 64J
   :align: center
   :bigendian:
   :lanes: 2
   :hspace: 700
   :bits: 64
   
A special jump format for large displacement JI and JALI, the 64J format allows for a full 56-bit unsigned jump, more than sufficient to cover the entire virtual address space of the Raisin64.

32 and 64-bit Unit/Op Table
+++++++++++++++++++++++++++

+---------+--------------------------------------+-----------------------------------------+
| **R/I** |        **Unit**                      |         **Op**                          |
+=========+======================================+=========================================+
|    0    | 0 - Basic Integer Math               | 0 - ADD                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - SUB                                 |
|         +--------------------------------------+-----------------------------------------+
|         | 1 - Compare/Set                      | 0 - SLT                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - SLTU                                |
|         |                                      +-----------------------------------------+
|         |                                      | 2 - SGT                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 3 - SGTU                                |
|         +--------------------------------------+-----------------------------------------+
|         | 2 - Shift                            | 0 - SLL                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - SRA                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 2 - SRL                                 |
|         +--------------------------------------+-----------------------------------------+
|         | 3 - Bitwise Op                       | 0 - AND                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - NOR                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 2 - OR                                  |
|         |                                      +-----------------------------------------+
|         |                                      | 3 - XOR                                 |
|         +--------------------------------------+-----------------------------------------+
|         | 4 - Advanced Integer Math            | 0 - MUL                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - MULU                                |
|         |                                      +-----------------------------------------+
|         |                                      | 2 - DIV                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 3 - DIVU                                |
|         +--------------------------------------+-----------------------------------------+
|         | 5 - Reserved                                                                   |
|         +--------------------------------------------------------------------------------+
|         | 6 - Reserved                                                                   |
|         +--------------------------------------+-----------------------------------------+
|         | 7 - Jump/Special                     | 0 - SYSCALL                             |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - F* (FPU Call) [1]_ [2]_             |
|         |                                      +-----------------------------------------+
|         |                                      | 2 - J                                   |
|         |                                      +-----------------------------------------+
|         |                                      | 3 - JAL                                 |
+---------+--------------------------------------+-----------------------------------------+
|    1    | 0 - Basic Integer Math               | 0 - ADDI                                |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - SUBI                                |
|         +--------------------------------------+-----------------------------------------+
|         | 1 - Compare/Set                      | 0 - SLTI                                |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - SLTIU                               |
|         |                                      +-----------------------------------------+
|         |                                      | 2 - SGTI                                |
|         |                                      +-----------------------------------------+
|         |                                      | 3 - SGTIU                               |
|         +--------------------------------------+-----------------------------------------+
|         | 2 - Shift                            | 0 - SLLI                                |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - SRAI                                |
|         |                                      +-----------------------------------------+
|         |                                      | 2 - SRLI                                |
|         +--------------------------------------+-----------------------------------------+
|         | 3 - Bitwise Op                       | 0 - ANDI                                |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - NORI                                |
|         |                                      +-----------------------------------------+
|         |                                      | 2 - ORI                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 3 - XORI                                |
|         +--------------------------------------+-----------------------------------------+
|         | 4 - Regular Load                     | 0 - LW                                  |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - L32                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 2 - L16                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 3 - L8                                  |
|         +--------------------------------------+-----------------------------------------+
|         | 5 - Sign-Extend Load                 | 0 - LUI [1]_                            |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - L32S                                |
|         |                                      +-----------------------------------------+
|         |                                      | 2 - L16S                                |
|         |                                      +-----------------------------------------+
|         |                                      | 3 - L8S                                 |
|         +--------------------------------------+-----------------------------------------+
|         | 6 - Store                            | 0 - SW                                  |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - S32                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 2 - S16                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 3 - S8                                  |
|         +--------------------------------------+-----------------------------------------+
|         | 7 - Jump Immediate                   | 0 - BEQ                                 |
|         |                                      +-----------------------------------------+
|         |                                      | 1 - BEQAL                               |
|         |                                      +-----------------------------------------+
|         |                                      | 2 - JI [1]_                             |
|         |                                      +-----------------------------------------+
|         |                                      | 3 - JALI [1]_                           |
+---------+--------------------------------------+-----------------------------------------+

.. [1] 64-bit format only
.. [2] The F* instruction uses the immediate field of 64S to request a specific enumerated service from the FPU.  These instructions (and FPU) do not yet exist.

.. raw:: latex

   \clearpage

Instructions
------------

.. toctree::
   :glob:
   :maxdepth: 1

   isa/*
