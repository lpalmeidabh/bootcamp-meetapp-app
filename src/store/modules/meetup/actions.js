export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function createUpdateMeetupSuccess(meetup) {
  return {
    type: '@meetup/CREATE_UPDATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function createUpdateMeetupFailure() {
  return {
    type: '@meetup/CREATE_UPDATE_MEETUP_FAILURE',
  };
}
