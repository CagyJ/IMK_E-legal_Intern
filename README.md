# IMK_E-legal_Intern

Live Demo: https://lexiapp.netlify.app/

Introduction Video: 

[![intro](http://img.youtube.com/vi/jvtoWKolU2U/0.jpg)](http://www.youtube.com/watch?v=jvtoWKolU2U "intro")

# Front-end

## Features
- Modern Vibe All the Way Around 💖
- Customizable Bot 🤖
- Auto-Save Your Chat Locally 🔐

## Previews
![preview](Previews/pre.gif)

## To Run
- clone the repo and ship into the project folder
- create `.env` file under `e-legal-intern` folder with the content:
  ```
    REACT_APP_OPENAI_API_KEY=your-key
  ```
- run `npm install`
- run `npm start`


## Next...
- Export to PDF of Chat History
- Integrate with the real engine instead of OpenAI
- Get accurate answers from the engine
- Deploy to the cloud

# Artificial Intelligence part
## Data scraping
We use https://njt.hu/ for scraping. We scraped the Well-known legislation(all the pages). We extract law published  from 1950 to 2010.
## Data cleaning
Once we have collected the data, we will need to preprocess it by cleaning, tokenizing, and formatting it to ensure that it is in a suitable format for training. This step typically involves removing special characters, stop words, and other noise, as well as converting the text into a numerical format that can be fed into the model.
## Tokenization
We dived the data in 6 files each file contains 10 000 words
We build a custom tokenization model for Hungarian well-known laws.
## Model Architecture
RobertaTokenizerFast is a fast and efficient tokenizer designed specifically for the RoBERTa model, which is a variant of the popular BERT (Bidirectional Encoder Representations from Transformers) model. The tokenizer is implemented in Python using the Hugging Face Tokenizers library, and is optimized for speed and memory efficiency.
The RobertaTokenizerFast works by splitting the input text into words or subwords, and then mapping each word or subword to a corresponding integer ID. This allows the input text to be represented as a sequence of integers, which can be fed into the RoBERTa model for processing.
Compared to other tokenizers, the RobertaTokenizerFast is optimized for speed and can tokenize large amounts of text quickly and efficiently. It also supports a wide range of languages and can handle complex input text with ease.
A masked attention model is a type of neural network architecture commonly used in natural language processing tasks, such as machine translation or language modeling. It involves the use of a self-attention mechanism, which allows the model to weigh the importance of different parts of an input sequence when generating an output.
The term "masked" refers to a technique used to prevent the model from attending to certain parts of the input sequence during training or inference. This is typically done to handle sequences of variable length, such as sentences of different lengths in a language model or source and target sequences of different lengths in a machine translation task.
In a masked attention model, a mask is applied to the attention weights in the self-attention mechanism to prevent the model from attending to certain positions in the input sequence. For example, in a language modeling task, the model may be trained to predict the next word in a sentence given the previous words, but during training, the model should not have access to future words in the sequence. Therefore, a mask can be applied to the attention weights to prevent the model from attending to future positions in the input sequence.
The use of masked attention has been shown to improve the performance of neural network models on natural language processing tasks, particularly those involving variable-length input sequences. Some popular implementations of masked attention models include the Transformer model and its variants.
The parameters;
1. Epochs=50
2.  Learning_rate= 0.04
3. per_device_train_batch_size=100
4. per_device_eval_batch_size=100
5. save_steps=8192
6. eval_steps=4096
7. save_total_limit=1

# Future 

1. Having an updated dataset for training is very important for the model quality and results. we are planning to deploy the model on Cloud ( AWS, Azure, ..) and implement a celery task for scraping the website to have new data and train the model on the new year laws 
