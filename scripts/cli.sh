#!/usr/bin/env bash

RN_VERSION="0.63.0-rc.1"
RN_TEMPLATE="@flexible-agency/react-native-starter"

npx @react-native-community/cli init --template $RN_TEMPLATE --version $RN_VERSION $@
