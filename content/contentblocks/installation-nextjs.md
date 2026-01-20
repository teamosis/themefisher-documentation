---
build:
  render: never
  list: never
  publishResources: false
---


## Prerequisites

You need to fulfill some prerequisites to configure your machine, before starting the development process.

{{< notice note >}}
If you’re using **macOS**, then [Homebrew](https://docs.brew.sh/Installation) is the easiest way to install the prerequisites. Check out [this guide](https://mac.install.guide/homebrew/index.html) to install Homebrew on your machine.
{{< /notice >}}

{{< notice warning >}}
{{< /notice >}}

### Install Nodejs

Install Nodejs with the following command on your **Terminal** according to your operating system if you haven't yet.

{{< tabs >}}
{{< tab "Windows" >}}

``` bash
winget install -e --id OpenJS.NodeJS.LTS
```

If you successfully installed Nodejs, then you can check the version with the following command.

``` bash
node -v
```

{{</ tab >}}
{{< tab "Mac" >}}

``` bash
brew install node@18
```

If you successfully installed Nodejs, then you can check the version with the following command.

``` bash
node -v
```

{{</ tab >}}
{{< tab "Linux" >}}
Please follow the [official documentation](https://nodejs.org/en/download/package-manager/) to install Nodejs on Linux.

If you successfully installed Nodejs, then you can check the version with the following command.

``` bash
node -v
```

{{</ tab >}}
{{</ tabs >}}

**Or**

Go to the official site to Download and Install [Nodejs](https://nodejs.org/en/download/).

---

## Run Your Project Locally

1. Open vscode terminal (ctrl+`) and run the following command to install all dependencies.

    ```shell
    npm install
    ```

2. Run the following command to start the development server.

    ```shell
    npm run dev
    ```

3. Now, you get a generated URL and open it in your browser. The default URL looks like this [localhost:3000](http://localhost:3000/).

---

## Build Your Project

After completing your development process, you can build your project for production. You can build your project with the following command.

```shell
npm run build
```
