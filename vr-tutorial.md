# Tutorial: Create a Visual Recognition Model

Follow these steps to create a visual recognition model in Watson Studio. For this tutorial, you can use the data files in this [github repository](https://github.com/sharynr/tutorial-files/tree/master/vr-model).

You may want to watch this video first to see how to create and test the model.
<a href="https://video.ibm.com/channel/23952663/video/ws-vr-create-model" target="_blank"><img src="images/vr-tutorial.jpg"></a>

Find more videos in the [Watson Studio documentation](https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/videos.html?audience=wdp#vizrec).

## Create the model
1. Open the project where you want to create the model.
1. Click **Add to project->Visual Recognition Model**.
1. If a Visual Recognition service instance is not already associated with your project, follow the prompts to create a new service or associate an existing service. Note: A Visual Recognition service instance can be associated with only one project at a time.
1. There are two type of visual recogntion models to image classification and object detection. In this case, click **Create Model** in the **Classify Images** box. 
1. Type  a name for your model.
1. Add the beagle, dalmation, golden-retriever, husky, poodles, and shih-tzu .zip files to your model from the **Find and add images** panel. Leave the other sample images for retraining the model later.
1. (Optional) Adjust your classes, for example: remove or rename classes, remove images from a class, or move images from one class to another.
1. Click **Train Model**.
1. Wait for the training process to finish. You can leave the Visual Recognition model builder while the process runs. You can monitor the status of the training process by looking at the status of the model on the Assets page of your project.

## Test the model
1. When you see the message “Training successful. Your model training is successful. click here to view and test your model.”, click the link to test your new model.
1. Click the **Test** tab.
1. To test individual image files, first unzip the test-images.zip file, and then drag the images from your computer onto the test area.

## Retrain the model
1. From the model test tab, click **Edit and Retrain**.
1. Edit your model by performing any of the following tasks:
   * Add more classes with new training images to your model, for example, add the cocker-spaniel and terriers .zip files.
   * Rename classes to eliminate any invalid characters, for example, the cocker-spaniel class contains an invalid character.
   * Reclassify any images, fore example, the terriers class has a dog that looks more like a poodle.
   * Add negative images from the NegativePets.zip file to the **Find and add images** panel, and then drag them into the **Negative** class.
1. Click **Train Model**.

## Test the model again
1. When you see the message “Training successful. Your model training is successful. click here to view and test your model.”, click the link to test your new model.
1. Click the **Test** tab.
1. To test individual image files, first unzip the test-images.zip file, and then drag the images from your computer onto the test area.

## Additional tutorial
Try this tutorial: [Survey wildfire-damaged neighborhoods to identify burned homes and intact homes](https://developer.ibm.com/tutorials/detect-wildfire-damaged-homes-using-drone-images-watson-visual-recognition/)
