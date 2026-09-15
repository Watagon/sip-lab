export declare namespace account {
  export function create(
    transport_id: number,
    params: {
      domain: string;
      server: string;
      username: string;
      password: string;
      to_url?: string;
      expires?: number;
      headers?: object;
    },
  ): Promise<number>;
}

export declare namespace request {
  export function create(
    t_id: number,
    params: {
      method: "REGISTER" | "OPTIONS" | "INFO" | "MESSAGE";
      from_uri: string;
      to_uri: string;
      request_uri?: string;
    },
  ): Promise<{
    id: number;
    sip_call_id: number;
  }>;

  export function respond(
    t_id: number,
    params: {
      code?: number;
      reason?: string;
    },
  ): Promise<void>;
}

export declare namespace call {
  export function create(
    t_id: number,
    params: {
      from_uri: string;
      to_uri: string;
      request_uri?: string;
      proxy_uri?: string;
      auth?: {
        realm: string;
        username: string;
        password: string;
      };
      delayed_media?: boolean;
      headers?: object;
    },
  ): Promise<{
    id: number;
    sip_call_id: number;
  }>;

  export function respond(
    t_id: number,
    params: {
      code?: number;
      reason?: string;
    },
  ): Promise<void>;

  export function terminate(
    t_id: number,
    params?: {
      code: number;
      reason: string;
    },
  ): Promise<void>;

  export function send_dtmf(
    t_id: number,
    params: {
      digits: string;
      mode: number;
      media_id?: number;
    },
  ): Promise<void>;

  export function send_dtmf(
    t_id: number,
    params: {
      bits: string;
      freq_zero: number;
      freq_one: number;
      level?: number;
      signal_duration?: number;
      media_id?: number;
    },
  ): Promise<void>;

  export function send_request(
    t_id: number,
    params: {
      method: "INVITE" | "UPDATE" | "PRACK" | "BYE";
      body?: number;
      ct_type?: string;
      ct_subtype?: string;
      level?: number;
      signal_duration?: number;
      media_id?: number;
    },
  ): Promise<void>;

  export function start_record_wav(
    t_id: number,
    params: {
      file: string;
      media_id?: number;
    },
  ): Promise<void>;

  export function start_play_wav(
    t_id: number,
    params: {
      file: string;
      media_id?: number;
      end_of_file_event?: bool;
      no_loop?: bool;
    },
  ): Promise<void>;

  export function start_speech_synth(
    t_id: number,
    params: {
      server_url: string;
      engine: string;
      voice: string;
      language: string;
      text: string;
      times?: number;
      media_id?: number;
    },
  ): Promise<void>;

  export function start_speech_recog(
    t_id: number,
    params?: {
      server_url: string;
      engine: string;
      language: string;
      media_id?: number;
    },
  ): Promise<void>;

  export function start_inband_dtmf_detection(
    t_id: number,
    params?: {
      media_id: number;
    },
  ): Promise<void>;

  export function start_bfsk_detection(
    t_id: number,
    params: {
      freq_zero: number;
      freq_one: number;
      media_id?: number;
    },
  ): Promise<void>;

  export function start_envelope_detection(
    t_id: number,
    params: {
      ref_file: string;
      threshold?: number;
      cooldown_ms?: number;
      check_stride?: number;
      media_id?: number;
    },
  ): Promise<void>;

  export function start_fax(
    t_id: number,
    params: {
      file: string;
      is_sender: boolean;
      transmit_on_idle?: bool;
      media_id?: number;
    },
  ): Promise<void>;
}

export declare namespace transport {
  export function create(params: {
    address: string;
    port: number;
    type?: "udp" | "tcp" | "tls" | "ws" | "wss";
    cert_file?: string;
    key_file?: string;
    ws_url?: string;
    headers?: object;
  }): Promise<{
    id: number;
    address: string;
    port: number;
  }>;

  export function destroy(transport_id: number): Promise<void>;
}

export declare namespace subscriber {
  export function notify(
    subscriber_id: number,
    params: {
      content_type: string;
      body: string;
      subscription_state: number;
      reason?: string;
    },
  ): Promise<void>;

  export function notify_xfer(
    subscriber_id: number,
    params: {
      subscription_state: number;
      code: number;
      reason?: string;
    },
  ): Promise<void>;
}

export declare namespace subscription {
  export function create(
    transport_id: number,
    params: {
      event: string;
      accept: string;
      from_uri: string;
      to_uri: string;
      request_uri?: string;
      proxy_uri?: string;
      auth?: {
        realm: string;
        username: string;
        password: string;
      };
    },
  ): Promise<number>;

  export function subscribe(
    subscriber_id: number,
    params: {
      expires?: number;
      headers?: object;
    },
  ): Promise<void>;
}

export declare function set_opus_config(params: {
  sample_rate?: number;
  channel_cnt?: number;
  bit_rate?: number;
  packet_loss?: number;
  complexity?: number;
  cbr?: boolean;
  frm_ptime?: number;
}): Promise<void>;
