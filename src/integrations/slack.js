const axios = require('axios');
const { SLACK_API_TOKEN, SLACK_URL_API, SLACK_CHANNEL_ID } = require('../configs/load-envs');
const { ApiIntegrationException } = require('../exceptions/index');
const { isEmpty } = require('../utils/validations');

class SlackService {
  constructor() {
    this.apiUrl = SLACK_URL_API;
    this.headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SLACK_API_TOKEN}`,
    };
  }

  #handleAttachments(hook) {
    const isMessageEmpty = !isEmpty(hook.message) ? hook.message : false;
    const isErrorMessageEmpty = !isEmpty(hook.errorsInfos) ? hook.errorsInfos : false;
    const data = !isEmpty(hook.data) ? hook.data : false;

    const message = isErrorMessageEmpty || isMessageEmpty;

    return [
      {
        title: 'Application',
        value: hook.application || 'unknown',
      },
      {
        title: 'Class',
        value: hook.className || 'unknown',
      },
      {
        title: 'Type',
        value: hook.type || 'unknown',
      },
      {
        title: 'Data',
        value: data ? JSON.stringify(data) : 'unknown',
      },
      {
        title: 'Metadata',
        value: isEmpty(hook.metadata) ? 'unknown' : JSON.stringify(hook.metadata),
      },
      {
        title: 'Message',
        value: JSON.stringify(message),
      },
      {
        title: 'Date',
        value: hook.timestamp,
      },
      {
        title: 'IP',
        value: hook.ip || 'unknown',
      }
    ]
  }

  #handlePayload(hook) {
    const payload = {
      channel: SLACK_CHANNEL_ID,
      text: `*${hook.severity.toUpperCase()}*`,
      attachments: [ { color: '#D60F12', fields: this.#handleAttachments(hook) } ],
    };

    return payload;
  };

  async notify(hook) {
    if (!this.apiUrl || !SLACK_API_TOKEN || !SLACK_CHANNEL_ID) {
      console.log(`[logger][WARN] Slack API not configured`);
      return false;
    }

    const url = `${this.apiUrl}/chat.postMessage`;
    const payload = this.#handlePayload(hook);

    try {
      const response = await axios.post(url, payload, { headers: this.headers });
      if (response.data.ok) {
        return response.data;
      }

      throw new ApiIntegrationException({
        message: response.data.warning || response.data.error,
        platform: 'slack'
      });
    } catch (error) {
      throw new ApiIntegrationException({
        message: error.toString(),
        platform: 'slack'
      });
    }
  };
};

module.exports = SlackService;