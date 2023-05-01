# Define the output directories for Golang and JavaScript protobuf files
PROTO_GO_OUT := $(PWD)/dist/go
PROTO_JS_OUT := $(PWD)/dist/js
PROTO_PROTOSETS_OUT := $(PWD)/dist/protosets
PROTO_DOCS_OUT := $(PWD)/docs


# Define the directories that contain your protobuf definitions
PROTO_DIRS := $(PWD)/tokens

# Define the path to the protoc binary
PROTOC := protoc

# Define the plugins and their paths for Golang and JavaScript
PROTOC_PLUGIN_GO := --go-grpc_out=$(PROTO_GO_OUT) --go_out=$(PROTO_GO_OUT)
PROTOC_PLUGIN_JS := --js_out=import_style=commonjs,binary:$(PROTO_JS_OUT) --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$(PROTO_JS_OUT)


# Define color codes for output
GREEN := "\033[32m"
RESET := "\033[0m"

# Define the input files for your protobuf definitions
PROTO_FILES := $(wildcard $(PROTO_DIRS)/*.proto)

# Define the path to the generated .proto_set file
PROTO_SET_FILE := $(PWD)/proto_set

# Define the commands to generate protobuf files for Golang and JavaScript
build: build-go build-js
	@echo $(GREEN) "All protobuf files generated successfully!" $(RESET)

build-go:
	@if [ ! -d "$(PROTO_GO_OUT)" ]; then mkdir -p "$(PROTO_GO_OUT)"; fi
	@if [ ! -d "$(PROTO_PROTOSETS_OUT)" ]; then mkdir -p "$(PROTO_PROTOSETS_OUT)"; fi
	@if [ ! -d "$(PROTO_DOCS_OUT)" ]; then mkdir -p "$(PROTO_DOCS_OUT)"; fi
	@$(PROTOC) $(PROTOC_PLUGIN_GO) \
		--doc_out=$(PROTO_DOCS_OUT) --doc_opt=json,docs.json \
		--descriptor_set_out=$(PROTO_PROTOSETS_OUT)/txpull.protoset \
		--include_source_info \
		--include_imports \
		--proto_path=$(PROTO_DIRS) $(PROTO_FILES)
	@echo $(GREEN) "Golang protobuf files generated successfully!" $(RESET)

build-js:
	@if [ ! -d "$(PROTO_JS_OUT)" ]; then mkdir -p "$(PROTO_JS_OUT)"; fi
		@if [ ! -d "$(PROTO_PROTOSETS_OUT)" ]; then mkdir -p "$(PROTO_PROTOSETS_OUT)"; fi
	@if [ ! -d "$(PROTO_DOCS_OUT)" ]; then mkdir -p "$(PROTO_DOCS_OUT)"; fi
	@$(PROTOC) $(PROTOC_PLUGIN_JS) --proto_path=$(PROTO_DIRS) $(PROTO_FILES)
	@echo $(GREEN) "JavaScript protobuf files generated successfully!" $(RESET)

clean:
	@rm -rf $(PROTO_GO_OUT)/*
	@rm -rf $(PROTO_JS_OUT)/*
	@rm -rf $(PROTO_DOCS_OUT)/*
	@rm -rf $(PROTO_PROTOSETS_OUT)/*
	@echo $(GREEN) "All protobuf files removed successfully!" $(RESET)

deps:
	@which protoc >/dev/null || (echo "protoc not found. Please install protobuf compiler" && exit 1)
	@which protoc-gen-go >/dev/null || (echo "protoc-gen-go not found. Installing..." && go install google.golang.org/protobuf/cmd/protoc-gen-go@latest)
	@which protoc-gen-go-grpc >/dev/null || (echo "protoc-gen-go-grpc not found. Installing..." && go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest)
	@which protoc-gen-docs >/dev/null || (echo "protoc-gen-docs not found. Installing..." && go install github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc)
	@which protoc-gen-js >/dev/null || (echo "protoc-gen-js not found. Installing..." && npm install grpc-tools)

	@echo $(GREEN) "All dependencies installed successfully!" $(RESET)

help:
	@echo "Available targets:"
	@echo "  build     : Build Golang and JavaScript protobuf files"
	@echo "  build-go  : Build Golang protobuf files"
	@echo "  build-js  : Build JavaScript protobuf files"
	@echo "  clean     : Remove all generated protobuf files"
	@echo "  deps      : Install missing dependencies"

.DEFAULT_GOAL := help

.PHONY: build build-go build-js clean deps help