# Protos

`Protos` is a repository that contains the protocol buffer definitions for the entire ecosystem of TxPull. We provide protocol buffer definitions for Go and JavaScript, and generate documentation and protoset files for use by our team and the wider community.

## Installation

To use the protocol buffer definitions in this repository, you'll need to install the following tools:

- `protoc`: The protocol buffer compiler. You can download the latest release from the [official website](https://github.com/protocolbuffers/protobuf/releases).
- `make`: A build automation tool. You can install this on macOS with [Homebrew](https://brew.sh/) by running `brew install make`.
- `npm`: The Node.js package manager. You can download the latest version of Node.js and npm from the [official website](https://nodejs.org/).
- `protoc-gen-go`: A Go plugin for the protocol buffer compiler that generates Go code from .proto files. You can download the latest release from the [official repository](https://github.com/protocolbuffers/protobuf-go).
- `protoc-gen-go-grpc`: A Go plugin for the protocol buffer compiler that generates Go code with gRPC support from .proto files. You can download the latest release from the [official repository](https://github.com/grpc/grpc-go).
- `protoc-gen-docs`: A plugin for the protocol buffer compiler that generates documentation in Markdown format from .proto files. You can download the latest release from the [official repository](https://github.com/pseudomuto/protoc-gen-doc).
- `protoc-gen-js`: A plugin for the protocol buffer compiler that generates JavaScript code from .proto files. You can install this using npm with the following command: `npm install -g grpc-tools`.
- `protoc-gen-grpc-web`: A plugin for the protocol buffer compiler that generates JavaScript code with gRPC-Web support from .proto files. You can install this using npm with the following command: `npm install -g grpc-web`.


This command will install the necessary Go packages and JavaScript dependencies.

```bash
make deps
```

In case you have issues with javascript compiler issues, well you can use following command:

```
npm install
```

This command will install the necessary javascript modules.

## Building the Protobuf Definitions

We provide Makefile targets to make it easy to build the protocol buffer definitions in this repository.

### `make build`

Generates Go and JavaScript code, documentation, and protoset files for the entire repository.

### `make build-go`

Generates Go code for the protocol buffer definitions in this repository.

### `make build-js`

Generates JavaScript code for the protocol buffer definitions in this repository.

### `make clean`

Removes generated files from previous builds.

### `make help`

Displays help information about the available Makefile targets.

## Contributing

We welcome contributions to this repository! To get started, please fork this repository and create a new branch for your changes. Then, submit a pull request to the `master` branch of this repository.

## License

This repository is licensed under the MIT License. See the `LICENSE` file for more information.