---
layout: page
title: Theoretical Basics
subtitle: Deep Learning
---

## 📋 Content


## WTF is DeepLearning?

![AI, ML and DL ](../../assets/img/theoretical_basics/ai_ml_dl.png)

DeepLearning, a distinct subset of machine learning, focuses on acquiring successive layers of progressively meaningful representations. The term "deep" signifies the utilization of these successive layers in learning. Neural networks, organized in literal stacked layers, are the models through which these layered representations are acquired in deep learning.

## Keras: The Python DeepLearning library
Keras is a framework for building deep neural networks with Python. Keras enables us to build state-of-the-art, deep learning systems just like those used at Google and Facebook, with little complexity and also with a few lines of code. Some of its key features are:

User-friendly API
Built-In support for convolutional networks (for computer vision), recurrent networks (for sequence processing), and any combination of both.
Supports arbitrary network architectures: multi-input or multi-output models, layer sharing, model sharing, and so on.
Keras is a front-end layer written in Python that runs on top of other popular deep learning toolkits like TensorFlow, Theano and Microsoft Cognitive Toolkit (CNTK). Any piece of code that you write with Keras can be run with any of these backends without having to change anything in the code. Via TensorFlow/Theano /CNTK, Keras can run seamlessly on both CPUs and GPUs.

## Typical Workflow
A typical machine learning workflow is as follows:
1. Feed the network with pre-processed training data.
2. The network then learns to associate the inputs of training data and their corresponding labels.
3. The network will then produce predicitions for unseen test data. Its accuracy will depend on how accurately its output matches the labels of the test data.

## Steps
### Loading dataset in Keras
```python
import keras

# import dataset
(train_images, train_labels), (test_images, test_labels) = ...
```
The multidimensional Numpy arrays, in which data is stored are called Tensors. You can think of tensors as a container for data. To be more specific tensors are a generalization of matrices to an arbitrary number of dimensions. Tensors can be defined by three key features:
- **Number of axes:** e.g. 2D Tensor has 2 axis.
- **Shape:** Dimensions of tensor along each axis, e.g. 3D tensor of shape (182,256,256)
- **Data Type:** Type of data contained in the Tensor, e.g. tensor's type could be `float32`, `int8` etc.

```python
#Training Data
# shape of training dataset
print(train_images.shape)

# Total no. of training images
print(len(train_labels)) 

# labels
print(train_labels)
```

### Preprocessing
bla bla

### Building Network architecture
A Deep learning network essentially consists of models and layers.

#### Layers
A layer is a core building block of a neural network. It acts as a kind of a data processing module. Layers extract representations out of the input data, that is fed into them. Inherently, Deep learning consists of stacking up these layers to form a model.

#### Model
A model is a linear stack of layers. It is like a sieve for data processing made of a succession of increasing refined data filters called layers. The simplest model in Keras is sequential, which is built by stacking layers sequentially.

#### Model Building
We will be building our very first model in Keras with only two layers. Here, we’re passing the expected shape of the input data to the first layer.
```python
from keras import models
from keras import layers

network = models.Sequential()
network.add(layers.Dense(512, activation='relu', input_shape=(28 * 28,)))
network.add(layers.Dense(10, activation='softmax'))
```
Our network consists of a sequence of two layers, which are densely connected (also called fully connected) neural layers.
- The first layer comprising of 512 units taking an input of a 784-dimensional array converted from the 28×28 image. The activation function used is ReLU (rectified linear unit). A rectified linear unit has output 0 if the input is less than 0, and raw output otherwise. That is, if the input is greater than 0, the output is equal to the input.
- The second (which is also the last here) layer is a 10-way softmax layer, which means it will return an array of 10 probability scores (summing to 1). Each score will be a probability that the current digit image belongs to one of our 10 digit classes. You can read more about the softmax function below.

### Network Compilation
We now know that our network consists of two dense layers each of which is applying some tensor operations on the input data. The operations involve weight tensors, and it is at these weights that the knowledge of the network is present.

- **Loss Function (Objective Function):** loss (Predicted — Actual value) is the quantity that we try to minimize during training of a neural network. Thus, measuring the Loss function is a measure of success for the task we are trying to solve. It is imperative to choose the right objective function for a problem. See the diagram below for commonly used loss functions.
- **Optimizer:** It specifies the exact way in which the gradient of the loss will be used to update parameters. In other words, it determines how the network will be updated based on the loss function. Optimizers could be the RMSProp optimizer, SGD with momentum, and so on.
- **Metrics:** to measure the accuracy of the model. In this case, we will use accuracy.

```python
network.compile(optimizer='rmsprop', loss='categorical_crossentropy', metrics=['accuracy'])
```

### Training the network
We’re now ready to train the network, which in Keras is done via a call to the network’s fit method — we fit the model to its training data:

```python
network.fit(train_images, train_labels, epochs=5, batch_size=128)
```

The network will start to iterate on the training data in mini-batches of 128 samples, 5 times over (each iteration over all the training data is called an epoch). At each iteration, the network will compute the gradients of the weights about the loss on the batch, and update the weights

Two quantities are displayed during training:
- Loss of the network over the training data, and
- Accuracy of the network over the training data.

### Testing on Test Data

```python
test_loss, test_acc = network.evaluate(test_images, test_labels)
```