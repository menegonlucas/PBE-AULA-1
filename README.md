# 📌 API de Endpoints para Cálculos Diversos

Este projeto contém uma API que disponibiliza diversos endpoints para cálculos matemáticos e lógicos.

## 🚀 Endpoints Disponíveis

### 1️⃣ Cálculo de Desconto do INSS
**Endpoint:** `/calcular-inss`  
Desenvolva um endpoint que receba o **salário de um funcionário** e calcule o desconto do **INSS** conforme a tabela abaixo:

- **Salário ≤ R$ 1.212,00** → **7,5%**
- **R$ 1.212,01 a R$ 2.427,35** → **9%**
- **R$ 2.427,36 a R$ 3.641,03** → **12%**
- **R$ 3.641,04 a R$ 7.087,22** → **14%**
- **Salário > R$ 7.087,22** → **14% sobre R$ 7.087,22 (teto máximo)**

O endpoint deve retornar o **valor do desconto** e o **salário final após o desconto**.

---

### 2️⃣ Classificação de Triângulo
**Endpoint:** `/classificar-triangulo`  
Desenvolva um endpoint que receba **três valores (a, b e c)** representando os lados de um triângulo e determine:

- **ESCALENO** → Todos os lados diferentes.
- **EQUILÁTERO** → Todos os lados iguais.
- **ISÓSCELES** → Apenas dois lados iguais.

---

### 3️⃣ Reajuste de Preço de Mercadoria
**Endpoint:** `/reajustar-preco`  
Desenvolva um endpoint que receba o **nome** e o **preço** de uma mercadoria.  
Ajuste o preço conforme a seguinte regra:

- Se o preço for **< R$ 1000,00**, aumente **5%**.
- Caso contrário, aumente **7%**.

O endpoint deve retornar o **nome da mercadoria** e seu **novo preço**.

---

### 4️⃣ Identificação do Maior Número
**Endpoint:** `/maior-numero`  
Desenvolva um endpoint que receba **6 números inteiros** e retorne o **maior número** entre eles.

---

### 5️⃣ Ordenação de Números
**Endpoint:** `/ordenar-numeros`  
Desenvolva um endpoint que receba **5 números inteiros** em qualquer ordem e os retorne **ordenados de forma crescente**.

---

### 6️⃣ Comparação de Dois Números
**Endpoint:** `/comparar-numeros`  
Desenvolva um endpoint que receba **dois números inteiros** e determine:

- Qual é o **maior**.
- Qual é o **menor**.

---

### 7️⃣ Cálculo de Reajuste Salarial
**Endpoint:** `/reajuste-salarial`  
Desenvolva um endpoint que receba o **salário atual** de um funcionário e aplique o reajuste conforme a tabela abaixo:

- **15% de aumento** → Salário entre **R$ 1.500,00 e R$ 1.749,99**
- **12% de aumento** → Salário entre **R$ 1.750,00 e R$ 1.999,99**
- **9% de aumento** → Salário entre **R$ 2.000,00 e R$ 2.999,99**
- **6% de aumento** → Salário **≥ R$ 3.000,00**

O endpoint deve retornar o **novo salário após o reajuste**.

---

### 8️⃣ Cálculo da Média Escolar e Situação do Aluno
**Endpoint:** `/situacao-aluno`  
Desenvolva um endpoint que receba **três notas** e calcule a **média** do aluno.  
Retorne a **situação** do aluno conforme as regras:

- **Média ≥ 6** → Aprovado ✅  
- **Média entre 4 e 5,9** → Recuperação ⚠️  
- **Média < 4** → Reprovado ❌  

---

### 9️⃣ Cálculo de Desconto em Promoção
**Endpoint:** `/calcular-desconto`  
Uma loja está em promoção e oferece descontos conforme o tipo de peça:  

- **Camisa** → **20% de desconto**.
- **Bermuda** → **10% de desconto**.
- **Calça** → **15% de desconto**.

O endpoint deve calcular o **valor final da venda** com o desconto aplicado.
