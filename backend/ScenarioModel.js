const fs = require('fs');
const {default: axios} = require("axios");

class ScenarioModel {
    constructor(datas) {
        this.fileName = datas.fileName;
        this.title = datas.title;
        this.description = datas.description;
        this.origin = "Terre Virtuelle";
        this.date = datas.date;
        this.auteur = datas.auteur;
        this.bbox = datas.bbox;
        this.steps = datas.steps;
        this.imgIndex = 1;
        this.videoIndex = 1;
        this.cmd = "scenario";
        this.commandes = datas.questions;
        this.camera = datas.camera;
    }

    getScenario() {
        return {
            fileName: this.fileName,
            title: this.title,
            description: this.description,
            origin: this.origin,
            date: this.date,
            auteur: this.auteur,
            bbox: this.bbox,
            introduction: this.introduction,
            steps: this.steps,
            cmd: this.cmd,
            commandes: this.commandes,
            camera : this.camera,
        };
    }

    // formatForRes() {
    //     this.questions = this.questions.map((question) => {
    //         if (question.response) {
    //             question.response.Images = this.formatImagesForRes(question.response.Images);
    //             question.response.Videos = this.formatVideosForRes(question.response.Videos);
    //         }
    //         return question;
    //     })
    // }

    formatImagesForRes(imagesArray) {
        return imagesArray.map(image => {
            const image_in_base64 = fs.readFileSync(image.path, 'base64');
            // we must get the extension of file
            const fileExt = image.path.split('.')[1];
            image.file = 'data:image/' + fileExt + ';base64,' + image_in_base64;
            delete image.path;
            return image;
        })
    }

    formatVideosForRes(videosArray) {
        return videosArray.map(video => {
            const video_in_base64 = fs.readFileSync(video.path, 'base64');
            // we must get the extension of file
            const fileExt = video.path.split('.')[1];
            video.file = 'data:image/' + fileExt + ';base64,' + video_in_base64;
            delete video.path;
            return video;
        })
    }

    save(fileName) {
        this.mainDirectoryName = '../ApiRestNaVisu4D/ApiRestNaVisu4D/data/scenarios/' + fileName;
        this.checkDirectory();
        //this.saveQuestions(); //probably useless now as i said in front of the question but not sure for img and video
        const jsonContent = JSON.stringify(this.getScenario(),null,4);
        const fullPath = this.mainDirectoryName + '/' + fileName + '.json';
        fs.writeFileSync(fullPath, jsonContent, 'utf8');
        this.exportScenario(fileName);
    }

    checkDirectory() {
        if (!fs.existsSync(this.mainDirectoryName)) {
            fs.mkdirSync(this.mainDirectoryName, {recursive: true});
        }
    }


    //this function is now useless cuz there is no awnser. However it was doing smthing with img and video but i don't know what for

    // saveQuestions() {
    //     this.questions = this.questions.map((question) => {
    //         if (question.response
    //         ) {
    //             question.response.Images = this.saveImages(question.response.Images);
    //             question.response.Videos = this.saveVideos(question.response.Videos);
    //         }
    //         return question;
    //     })
    // }

    saveImages(imagesArray) {
        return imagesArray.map((image) => {
            let base64Array = image.file.split(';base64,');
            const type = base64Array[0].split('data:image/')[1];
            const imageName = 'img' + this.imgIndex;
            const path = this.mainDirectoryName + '/images/' + imageName + '.' + type;
            fs.writeFileSync(path, base64Array[1], {encoding: 'base64'});
            delete image.file;
            this.imgIndex++;
            return {path: path, ...image}
        });
    }

    saveVideos(VideosArray) {
        return VideosArray.map((video) => {
            let base64Array = video.file.split(';base64,');
            const type = base64Array[0].split('data:video/')[1];
            const videoName = 'video' + this.videoIndex;
            const path = this.mainDirectoryName + '/videos/' + videoName + '.' + type;
            fs.writeFileSync(path, base64Array[1], {encoding: 'base64'});
            delete video.file;
            this.videoIndex++;
            return {path: path, ...video}
        });
    }

    exportScenario(fileName) {
        const exportUrl = 'http://93.90.200.21:3003/export?cmd=scenario&origin=TV&target=' + fileName;
        axios.get(exportUrl)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })

    }


}

module.exports = ScenarioModel