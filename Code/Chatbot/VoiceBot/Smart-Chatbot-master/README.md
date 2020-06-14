# Run locally


## Configure `.env` with credentials

Our services are created and the workspace is uploaded. It's now time to let our application run locally and to do that we'll configure a simple text file with the environment variables we want to use. We begin by copying the [`sample.env`](sample.env) file and naming it `.env`.

```bash
cp sample.env .env
```

Note that our chatbot workspace is in the link for ease of demo viewing

You just need your own text-to-speech and speech-to-text from IBM


## Run the application

* The server requires Python 3.5 and above. It has been tested with Python 3.8.0.

* The general recommendation for Python development is to use a virtual environment ([venv](https://docs.python.org/3/tutorial/venv.html)). To install and initialize a virtual environment, use the `venv` module on Python 3:

Create the virtual environment using Python. Use one of the two commands depending on your Python version.
> Note: `python` may be named `python3` on your system.

```bash
python3 -m venv mytestenv
```

Now source the virtual environment. Use one of the two commands depending on your OS.

```bash
source mytestenv/bin/activate  # Mac or Linux
./mytestenv/Scripts/activate   # Windows PowerShell
```
> **TIP** :bulb: To terminate the virtual environment use the `deactivate` command.

1. Install the dependencies
```bash
pip install -r requirements.txt
```

2. Start the app by running:

```bash
python app.py
```

3. Launch a browser and navigate to [http://localhost:5000](http://localhost:5000)
4. Click on the microphone icon to begin speaking and click it again when you are finished.

